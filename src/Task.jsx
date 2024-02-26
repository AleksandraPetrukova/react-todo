import Button from "./Button"

export default function Task({key, name, completed}) {
    function handleDelete(e) {
        e.preventDefault();
        console.log("Task deleted");
    }
    return (
        <form action="" className="single-task">
            <input type="checkbox" name="" id={key} checked={completed}/>
            <input type="text" value={name}/>
            <Button handleClick={handleDelete} className="delete-btn">Delete</Button>
        </form>
    )
}