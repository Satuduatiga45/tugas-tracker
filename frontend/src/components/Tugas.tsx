import { useState } from "react";
import { useStatus } from "../hooks/useStatus";
import ViewDetails from "./ViewDetails";

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
	const [active, setActive] = useState(false);

	// jika status completed, btn edit, delete, pin hilang
	const handleHide = props.isCompleted ? "hide" : "";
	const handleViewDetails = () => {
		setActive(!active);
	};
	const handleBack = () => {
		setActive(!active);
	};

	return (
		<div className="tugas">
			<div className="value">
				<div className="text" id="due">
					<span id="date">{props.date}</span>
					<span id="time">{props.time}</span>
				</div>
				<div className="text" id="tugas">
					<span id="title">{props.title}</span>
					<span id="status">{status}</span>
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
					<button className={`done ${handleHide}`}>Done</button>
					<button className={`edits ${handleHide}`}>Edit</button>
					<button className="delete">Delete</button>
				</div>
			</div>
			{active && (
				<ViewDetails
					id={props.id}
					title={props.title}
					description={props.description}
					date={props.date}
					time={props.time}
					status={status}
					onAction={handleBack}
					// isActive={props.viewDetails}
				/>
			)}
		</div>
	);
}

export default Tugas;
