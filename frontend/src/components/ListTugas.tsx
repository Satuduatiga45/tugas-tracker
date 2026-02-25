import Tugas from "./Tugas";
import { useGetTugas } from "../api/useGetTugas";
import { useEffect } from "react";

interface ListTugasProps {
	refreshKey: number;
}

function ListTugas(props: ListTugasProps) {
	const { data, getTugas, loading, error } = useGetTugas();

	useEffect(() => {
		getTugas();
	}, [props.refreshKey]);

	return (
		<div className="list-tugas">
			{!loading &&
				!error &&
				data.map(
					({ id, title, description, date, time, isCompleted }) => (
						<Tugas
							key={id}
							id={id}
							title={title}
							description={description}
							date={date}
							time={time}
							isCompleted={isCompleted}
						/>
					),
				)}
			{loading && <p>Loading...</p>}
			{error && <p>Error: {error}</p>}
		</div>
	);
}

export default ListTugas;
