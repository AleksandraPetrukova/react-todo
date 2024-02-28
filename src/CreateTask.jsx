import Button from "./Button"
import { useState } from "react";

export default function CreateTask({ taskList, onSubmit}) {
    const [task, setTask] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        const newTask = {
            id: crypto.randomUUID(),
            name: task,
            completed: false
        }
        const updatedTaskList = [...taskList, newTask];
        onSubmit(updatedTaskList);
        setTask("");
    }

    const handleChange = (e) => {
        setTask(e.target.value);
    }
    return (
        <form action="" className="create-task-form">
            <input type="text" value={task} onChange={handleChange} className="input-task"/>
            <Button handleClick={handleSubmit} className="create-btn">Create Task</Button>
        </form>
    )
}