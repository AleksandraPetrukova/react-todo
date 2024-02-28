import Button from "./Button"
import { useState } from "react";

export default function Task({ index, name, completed, toggleTask, deleteTask }) {
    const [isDeleteBtn, setIsDeleteBtn] = useState(true);

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
    
    return (
        <form action="" className="single-task">
            <input 
                type="checkbox"
                name=""
                checked={completed}
                onChange={handleCheckboxChange}
            />
            <input type="text" value={name} onClick={toggleDeleteBtn}/>
            {isDeleteBtn ? 
                <Button handleClick={handleDelete} className="delete-btn">Delete</Button> :
                <Button className="confirm-btn">Confirm</Button>
            }
        </form>
    )
}