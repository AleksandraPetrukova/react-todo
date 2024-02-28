import Button from "./Button"

export default function FilterTasks({setFilterType}) {
    function filterAll() {
        setFilterType('all');
    }
    function filterActive() {
        setFilterType('active');
    }
    function filterCompleted() {
        setFilterType('completed');
    }
    return (
        <div className="filter-cont">
            <Button handleClick={filterAll} className="filter-btn">All</Button>
            <Button handleClick={filterActive} className="filter-btn">Active</Button>
            <Button handleClick={filterCompleted} className="filter-btn">Completed</Button>
        </div>
    )
}