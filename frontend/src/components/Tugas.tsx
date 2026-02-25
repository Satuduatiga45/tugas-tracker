import { useState } from "react";
import { useStatus } from "../hooks/useStatus";
import ViewDetails from "./ViewDetails";
import InputUser from "../components/InputUser";

interface TugasProps {
	id: number;
	title: string;
	description?: string;
	date: string;
	time: string;
	isCompleted: boolean;
}

function Tugas(props: TugasProps) {
	const status = useStatus(props.date, props.time, props.isCompleted);

	const [activeViewDetails, setActiveViewDetails] = useState(false);
	const [activeEdit, setActiveEdit] = useState(false);

	// jika status completed, btn edit, delete, pin hilang
	const handleHide = props.isCompleted ? "hide" : "";
	const handleViewDetails = () => {
		setActiveViewDetails(!activeViewDetails);
	};
	const handleEdit = () => {
		setActiveEdit(!activeEdit);
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
					<div className={`text ${handleHide}`}>
						<span id="pin">&#9734;</span>
						{/* &#9733; filled star  */}
					</div>
					<div className="button">
						<button className="details" onClick={handleViewDetails}>
							View Details
						</button>
						<button className={`donebtn ${handleHide}`}>
							Done
						</button>
						<button
							className={`editbtn ${handleHide}`}
							onClick={handleEdit}
						>
							Edit
						</button>
						<button className="deletebtn">Delete</button>
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
				/>
			)}
		</>
	);
}

export default Tugas;
