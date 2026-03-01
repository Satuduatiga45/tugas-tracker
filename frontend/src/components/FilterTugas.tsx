import { useSearchParams } from "react-router";
import Filter from "./Filter";
import { useEffect, useState } from "react";
import { useGetTugas } from "../api/useGetTugas";

// Filter Tugas

interface FilterType {
	label: string;
	count: string;
}

function FilterTugas() {
	const [filterParams, setFilterParams] = useSearchParams();
	const { count, countTugas } = useGetTugas();
	const [filters, setFilters] = useState<FilterType[]>([]);

	useEffect(() => {
		setFilters([
			{ label: "ALL", count: count[0].toString() || "0" },
			{
				label: "IN PROGRESS",
				count: count[1].toString() || "0",
			},
			{ label: "OVERDUE", count: count[2].toString() || "0" },
			{
				label: "COMPLETED",
				count: count[3].toString() || "0",
			},
		]);
		countTugas();
	}, [count]);

	const handleFilter = (label: string) => {
		const filter = label
			.split(" ")
			.map((e) => e.toLowerCase())
			.join("-");

		setFilterParams({ filter: filter });
	};

	return (
		<div className="filter-tugas">
			{filters.map(({ label, count }, index) => (
				<Filter
					key={index}
					label={label}
					count={count || "0"}
					active={
						label
							.split(" ")
							.map((e) => e.toLowerCase())
							.join("-") === filterParams.get("filter")
					}
					handler={() => handleFilter(label)}
				/>
			))}
		</div>
	);
}

export default FilterTugas;
