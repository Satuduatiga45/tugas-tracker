import Filter from "./Filter"

function FilterTugas() {
    return (
        <div className="filter-tugas">
            <Filter label="ALL" count={0}/>
            <Filter label="IN PROGRESS" count={0}/>
            <Filter label="OVERDUE" count={0}/>
            <Filter label="COMPLETED" count={0}/>
        </div>
    )
}

export default FilterTugas