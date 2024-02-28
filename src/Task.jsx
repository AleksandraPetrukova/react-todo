import Button from "./Button"
import { useState } from "react";

export default function Task({ index, name, completed, toggleTask, deleteTask, editTask }) {
    const [isDeleteBtn, setIsDeleteBtn] = useState(true);
    const [newTask, setNewTask] = useState(name);

    function toggleDeleteBtn() {
        setIsDeleteBtn(!isDeleteBtn);
    }

    function handleCheckboxChange() {
        toggleTask(index);
    }
    
    function handleDelete(e) {
        e.preventDefault();
        deleteTask(index);
    }

    function handleEdit(e) {
        e.preventDefault();
        editTask(index, newTask);
        setIsDeleteBtn(true);
    }

    function handleChange(e) {
        setNewTask(e.target.value);
    }

    return (
        <form action="" className="single-task">
            <input 
                type="checkbox"
                name=""
                checked={completed}
                onChange={handleCheckboxChange}
            />
            <input type="text" value={newTask} onClick={toggleDeleteBtn} onChange={handleChange}/>
            {isDeleteBtn ? 
                <Button handleClick={handleDelete} className="delete-btn">Delete</Button> :
                <Button handleClick={handleEdit} className="confirm-btn">Confirm</Button>
            }
        </form>
    )
}