// import { useSearchParams } from "react-router";
import { useStatus } from "../hooks/useStatus";

import ViewDetails from "./ViewDetails";

interface TugasProps {
	id: number;
	title: string;
	description?: string;
	date: string;
	time: string;
	isCompleted: boolean;
	viewDetails: boolean;
	handleViewDetails(): void;
}

function Tugas(props: TugasProps) {
	const status = useStatus(props.date, props.time, props.isCompleted);
	// const [, setIdViewDetailsParams] = useSearchParams();

	// const handleViewDetails = () => {
	// 	setIdViewDetailsParams({ idViewDetails: props.id.toString() });
	// };

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
				<div className="text">
					<span id="pin">&#9734;</span>
					{/* &#9733; filled star  */}
				</div>
				<div className="button">
					<button
						className="details"
						onClick={props.handleViewDetails}
					>
						View Details
					</button>
					<button className="done">Done</button>
					<button className="edit">Edit</button>
					<button className="delete">Delete</button>
				</div>
			</div>
			<ViewDetails
				title={props.title}
				description={props.description}
				date={props.date}
				time={props.time}
				status={status}
				isActive={props.viewDetails}
			/>
		</div>
	);
}

export default Tugas;
