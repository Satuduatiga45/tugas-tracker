interface FilterProps {
	label: string;
	count: number;
	active: boolean;
	handler(): void;
}

function Filter(props: FilterProps) {
	// const divRef = useRef<HTMLDivElement>(null);
	// const [filterParams, setFilterParams] = useSearchParams();

	// const handleFilter = () => {
	// 	const filter = props.label
	// 		.split(" ")
	// 		.map((e) => e.toLowerCase())
	// 		.join("-");

	// 	setFilterParams({ filter: filter });
	// };

	return (
		<div
			className={`filter ${props.active ? "active" : ""}`}
			onClick={props.handler}
		>
			<span id="label">{props.label}</span>
			<span id="count">{props.count}</span>
		</div>
	);
}

export default Filter;
