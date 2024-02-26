import Button from "./Button"

export default function CreateTask() {
    function handleSubmit(event) {
        event.preventDefault();
        console.log("Task created");
    }
    return (
        <form action="">
            <input type="text" />
            <Button handleClick={handleSubmit} className="create-btn">Create Task</Button>
        </form>
    )
}