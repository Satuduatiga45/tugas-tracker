interface FilterProps {
    label: string,
    count: number
}

function Filter(props: FilterProps) {
    return (
        <div className="filter">
            <span id="label">{props.label}</span>
            <span id="count">{props.count}</span>
        </div>
    )
}

export default Filter