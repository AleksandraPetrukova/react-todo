import Button from "./Button"
import { useState } from "react";

export default function CreateTask({ taskList, onSubmit}) {
    const [taskName, setTaskName] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        const newTask = {
            id: crypto.randomUUID(),
            name: taskName,
            completed: false
        }
        const updatedTaskList = [...taskList, newTask];
        onSubmit(updatedTaskList);
        setTaskName("");
    }

    const handleChange = (e) => {
        setTaskName(e.target.value);
    }
    return (
        <form action="" className="create-task-form">
            <label htmlFor="taskName" className="task-label">Task Name:</label>
            <input type="text" value={taskName} onChange={handleChange} className="input-task"/>
            <Button handleClick={handleSubmit} className="create-btn">Create Task</Button>
        </form>
    )
}