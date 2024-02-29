import Button from "./Button"
import { useState } from "react";

export default function Task({ index, name, completed, onToggle, onDelete, onEdit }) {
    const [newTask, setNewTask] = useState(name);
    const [isEdit, setIsEdit] = useState(true);

    const handleCheckboxChange = () => {
        onToggle(index);
    }

    const handleDelete = (e) => {
        e.preventDefault();
        onDelete(index);
    }

    const handleEdit = (e) => {
        e.preventDefault();
        onEdit(index, newTask);
    }

    const handleChange = (e) => {
        setNewTask(e.target.value);
    }

    const handleEditState = () => {
        setIsEdit(!isEdit);
    }


    return (
        <form action="" className="single-task">
            <label htmlFor="taskCompleted" className="task-label">Checkbox</label>
            <input 
                type="checkbox"
                checked={completed}
                onChange={handleCheckboxChange}
                className="checkbox-task"
            />
            <label htmlFor="newTask" className="task-label">Task:</label>
            <input type="text" 
                value={newTask}
                onChange={handleChange}
                onFocus={handleEditState}
                onBlur={handleEditState}
                className="input-edit-task"
            />
            <Button handleClick={handleEdit} className={isEdit?"edit-btn-vis":"edit-btn-invis"}>Save</Button>
            <Button handleClick={handleDelete} className="delete-btn">Delete</Button>
        </form>
    )
}