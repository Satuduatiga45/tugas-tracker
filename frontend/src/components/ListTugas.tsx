import Tugas from "./Tugas";
import { useGetTugas } from "../api/useGetTugas";
import { useEffect, useState } from "react";

interface ListTugasProps {
	refreshKey: number;
}

function ListTugas(props: ListTugasProps) {
	const { data, getTugas, loading, error } = useGetTugas();

	// data refresh ketika ada edit tugas
	const [refreshAfterEdit, setRefreshAfterEdit] = useState(0);
	const handleRefreshAfterEdit = () => {
		setRefreshAfterEdit((prev) => prev + 1);
	};

	// data refresh ketika ada delete tugas
	const [refreshAfterDelete, setRefreshAfterDelete] = useState(0);
	const handleRefreshAfterDelete = () => {
		setRefreshAfterDelete((prev) => prev + 1);
	};

	useEffect(() => {
		getTugas();
	}, [props.refreshKey, refreshAfterEdit, refreshAfterDelete]);

	return (
		<div className="list-tugas">
			{data.length === 0 && <p>Tidak ada tugas.</p>}
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
							onTugasEdited={handleRefreshAfterEdit}
							onTugasDeleted={handleRefreshAfterDelete}
						/>
					),
				)}
			{loading && <p>Loading...</p>}
			{error && <p>Error: {error}</p>}
		</div>
	);
}

export default ListTugas;
