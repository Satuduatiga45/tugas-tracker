interface FilterProps {
	label: string;
	count: string;
	active: boolean;
	handler(): void;
}

function Filter(props: FilterProps) {
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
