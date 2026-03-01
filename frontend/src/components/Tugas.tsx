import { useState } from "react";
import { useStatus } from "../hooks/useStatus";
import ViewDetails from "./ViewDetails";
import InputUser from "../components/InputUser";
import { useDeleteTugas } from "../api/useDeleteTugas";
import { useToggleIsCompleted, useToggleIsPinned } from "../api/usePatchTugas";

interface TugasProps {
	id: number;
	title: string;
	description?: string;
	date: string;
	time: string;
	isPinned: boolean;
	isCompleted: boolean;
	onTugasEdited(): void;
	onTugasDeleted(): void;
	onTugasCompleted(): void;
	onTugasPinned(): void;
}

function Tugas(props: TugasProps) {
	const status = useStatus(props.date, props.time, props.isCompleted);

	const [activeViewDetails, setActiveViewDetails] = useState(false);
	const [activeEdit, setActiveEdit] = useState(false);

	// jika status completed, btn edit, delete, pin hilang
	const handleHide = props.isCompleted ? "hide" : "";

	// handle view details popup
	const handleViewDetails = () => {
		setActiveViewDetails(!activeViewDetails);
	};

	// handle edit popup
	const handleEdit = () => {
		setActiveEdit(!activeEdit);
	};

	// handle delete method
	const { deleteTugas, deleteError } = useDeleteTugas();
	const handleDelete = () => {
		deleteTugas(props.id);
		props.onTugasDeleted();
	};

	// handle completed tugas
	const { toggleIsCompleted, toggleIsCompletedError } =
		useToggleIsCompleted();
	const handleToggleIsCompleted = () => {
		toggleIsCompleted(props.id);
		props.onTugasCompleted();
	};

	// handle pinned tugas
	const { toggleIsPinned, toggleIsPinnedError } = useToggleIsPinned();
	const handleToggleIsPinned = () => {
		toggleIsPinned(props.id);
		props.onTugasPinned();
	};

	const dateFormat = () => {
		const date = new Date(props.date);
		const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
		const months = [
			"Jan",
			"Feb",
			"Mar",
			"Apr",
			"May",
			"Jun",
			"Jul",
			"Aug",
			"Sep",
			"Oct",
			"Nov",
			"Dec",
		];

		const year = date.getFullYear();
		const month = months[date.getMonth()];
		const day = date.getDate();
		const dayOfWeek = days[date.getDay()];

		return `${dayOfWeek}, ${day} ${month} ${year}`;
	};

	const statusClass = () => {
		return status
			.split(" ")
			.map((e) => e.toLowerCase())
			.join("-");
	};

	return (
		<>
			<div className="tugas">
				<div className="value">
					<div className="text" id="due">
						<span id="date">{dateFormat()}</span>
						<span id="time">{props.time}</span>
					</div>
					<div className="text" id="tugas">
						<span id="title">{props.title}</span>
						<span id="status" className={statusClass()}>
							{status}
						</span>
					</div>
				</div>
				<div className="action">
					<div
						className={`text ${handleHide}`}
						onClick={handleToggleIsPinned}
					>
						{props.isPinned ? (
							<span id="pin">&#9733;</span>
						) : (
							<span id="pin">&#9734;</span>
						)}
					</div>
					<div className="button">
						<button className="details" onClick={handleViewDetails}>
							View Details
						</button>
						<button
							className={`donebtn ${handleHide}`}
							onClick={handleToggleIsCompleted}
						>
							Done
						</button>
						<button
							className={`editbtn ${handleHide}`}
							onClick={handleEdit}
						>
							Edit
						</button>
						<button className="deletebtn" onClick={handleDelete}>
							Delete
						</button>
					</div>
				</div>
			</div>
			{activeViewDetails && (
				<ViewDetails
					id={props.id}
					title={props.title}
					description={props.description}
					date={dateFormat()}
					time={props.time}
					status={status}
					handleBack={handleViewDetails}
					statusClass={statusClass}
				/>
			)}
			{activeEdit && (
				<InputUser
					header="Edit Tugas"
					id={props.id}
					title={props.title}
					description={props.description}
					date={props.date}
					time={props.time}
					handleBack={handleEdit}
					onSuccess={props.onTugasEdited}
				/>
			)}
			{deleteError && alert(deleteError)}
			{toggleIsCompletedError && alert(toggleIsCompletedError)}
			{toggleIsPinnedError && alert(toggleIsPinnedError)}
		</>
	);
}

export default Tugas;
