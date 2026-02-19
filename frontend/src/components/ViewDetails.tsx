import { useRef } from "react";
import { useSearchParams } from "react-router";

interface ViewDetailsProps {
	title: string;
	description?: string;
	date: string;
	time: string;
	status: string;
	isActive: boolean;
}

function ViewDetails(props: ViewDetailsProps) {
	const divRef = useRef<HTMLDivElement>(null);
	const [idViewDetailsParams] = useSearchParams();

	const handleBack = () => {
		idViewDetailsParams.delete("idViewDetails");
		divRef.current?.classList.add("hide");
	};

	return (
		<div className={props.isActive ? "" : "hide"} ref={divRef}>
			<div className="background-disable"></div>
			<div className="view-details">
				<div className="details-header">
					<div className="details-value">
						<h1 id="details-title">{props.title}</h1>
						<span id="details-status">{props.status}</span>
					</div>
					<p id="details-datetime">
						Due: {props.date} ({props.time})
					</p>
				</div>
				<div className="description">
					<p>
						{props.description
							? props.description
							: "Tidak ada deskripsi."}
					</p>
				</div>
				<button onClick={handleBack}>Back</button>
			</div>
		</div>
	);
}

export default ViewDetails;
