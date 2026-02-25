interface ViewDetailsProps {
	id: number;
	title: string;
	description?: string;
	date: string;
	time: string;
	status: string;
	handleBack(): void;
	statusClass(): string;
}

function ViewDetails(props: ViewDetailsProps) {
	return (
		<>
			<div className="background-disable"></div>
			<div className="view-details">
				<div className="details-header">
					<div className="details-value">
						<h1 id="details-title">{props.title}</h1>
						<span
							id="details-status"
							className={props.statusClass()}
						>
							{props.status}
						</span>
					</div>
					<p id="details-datetime">
						Due: {props.date} | {props.time}
					</p>
				</div>
				<div className="description">
					<p>
						{props.description
							? props.description
							: "Tidak ada deskripsi."}
					</p>
				</div>
				<button onClick={props.handleBack}>Back</button>
			</div>
		</>
	);
}

export default ViewDetails;
