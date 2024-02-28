import "./assets/style.css"
import CreateTask from "./CreateTask"
import ShowTasks from "./ShowTasks"
import FilterTasks from "./FilterTasks"
import { useState } from "react";

function App() {
    const [taskList, setTaskList] = useState([]);
    const [filterType, setFilterType] = useState('all');

    const handleTask = (updatedTaskList) => {
        setTaskList(updatedTaskList);
    }

    const handleFilter = (filterType) => {
        setFilterType(filterType);
    }

    return (
        <main className="section">
            <h1>Let's Do It List</h1>
            <CreateTask taskList={taskList} onSubmit={handleTask}/>
            <FilterTasks onChange={handleFilter} filterType={filterType}/>
            <ShowTasks taskList={taskList} onSubmit={handleTask} filterType={filterType}/>
        </main>
    )
}

export default App
