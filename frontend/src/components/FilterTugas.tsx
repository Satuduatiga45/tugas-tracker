import { useState } from "react";
import { useSearchParams } from "react-router";
import Filter from "./Filter";

const filters = [
	{ label: "ALL", count: 0 },
	{ label: "IN PROGRESS", count: 0 },
	{ label: "OVERDUE", count: 0 },
	{ label: "COMPLETED", count: 0 },
];

function FilterTugas() {
	const [activeIndex, setActiveIndex] = useState(0);
	const [, setFilterParams] = useSearchParams();

	const handleFilter = (label: string, index: number) => {
		const filter = label
			.split(" ")
			.map((e) => e.toLowerCase())
			.join("-");

		setFilterParams({ filter: filter });
		setActiveIndex(index);
	};

	return (
		<div className="filter-tugas">
			{filters.map(({ label, count }, index) => (
				<Filter
					key={index}
					label={label}
					count={count}
					active={activeIndex === index}
					handler={() => handleFilter(label, index)}
				/>
			))}
		</div>
	);
}

export default FilterTugas;
