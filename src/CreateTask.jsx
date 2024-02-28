import Button from "./Button"
import { useState } from "react";

export default function CreateTask({ taskList, setTaskList }) {
    const [task, setTask] = useState("");
    function handleSubmit(event) {
        event.preventDefault();
        const newTask = {
            name: task,
            completed: false
        }
        setTaskList([...taskList, newTask]);
        setTask("");
    }
    function handleChange(e) {
        setTask(e.target.value);
    }
    return (
        <form action="">
            <input type="text" value={task} onChange={handleChange}/>
            <Button handleClick={handleSubmit} className="create-btn">Create Task</Button>
        </form>
    )
}