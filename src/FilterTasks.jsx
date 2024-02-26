import Button from "./Button"

export default function FilterTasks() {
    function filterAll() {
        console.log("Filtering all tasks");
    }
    function filterActive() {
        console.log("Filtering active tasks");
    }
    function filterCompleted() {
        console.log("Filtering completed tasks");
    }
    return (
        <div className="filter-cont">
            <Button handleClick={filterAll} className="filter-btn">All</Button>
            <Button handleClick={filterActive} className="filter-btn">Active</Button>
            <Button handleClick={filterCompleted} className="filter-btn">Completed</Button>
        </div>
    )
}