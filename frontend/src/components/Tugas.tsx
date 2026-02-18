import { useEffect, useState } from "react";

interface TugasProps {
	title: string;
	description?: string;
	date: string;
	time: string;
}

const useStatus = (date: string, time: string, isCompleted: boolean) => {
	const [status, setStatus] = useState<string>();

	useEffect(() => {
		const checkStatus = () => {
			const isoString = `${date.replace(/:/g, "-")}T${time}:00`;
			const tugasDateTime = new Date(isoString);
			const currentDateTime = new Date();

			if (isCompleted) {
				setStatus("Completed");
			} else if (currentDateTime > tugasDateTime) {
				setStatus("Overdue");
			} else {
				setStatus("In Progress");
			}
		};

		checkStatus();

		const interval = setInterval(checkStatus, 60000); // interval 1 menit

		return () => clearInterval(interval);
	}, [date, time, isCompleted]);

	return status;
};

function Tugas(props: TugasProps) {
	const status = useStatus(props.date, props.time, false);

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
					<button className="details">View Details</button>
					<button className="done">Done</button>
					<button className="edit">Edit</button>
					<button className="delete">Delete</button>
				</div>
			</div>
		</div>
	);
}

export default Tugas;
