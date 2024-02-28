import Button from "./Button"

export default function FilterTasks({onChange, filterType}) {
    const filterAll = () => {
        onChange('all');
    }
    const filterActive = () => {
        onChange('active');
    }
    const filterCompleted = () => {
        onChange('completed');
    }
    return (
        <div className="filter-cont">
            <Button handleClick={filterAll} className={filterType == "all"?"filter-btn active":"filter-btn"}>All</Button>
            <Button handleClick={filterActive} className={filterType == "active"?"filter-btn active":"filter-btn"}>Active</Button>
            <Button handleClick={filterCompleted}  className={filterType == "completed"?"filter-btn active":"filter-btn"}>Completed</Button>
        </div>
    )
}