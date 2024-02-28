import "./assets/style.css"
import CreateTask from "./CreateTask"
import ShowTasks from "./ShowTasks"
import FilterTasks from "./FilterTasks"
import { useState } from "react";

function App() {
    const [taskList, setTaskList] = useState([]);
    const [filterType, setFilterType] = useState('all');
    return (
        <section className="section">
            <h1>Task List</h1>
            <CreateTask taskList={taskList} setTaskList={setTaskList}/>
            <FilterTasks setFilterType={setFilterType}/>
            <ShowTasks taskList={taskList} setTaskList={setTaskList} filterType={filterType}/>
        </section>
    )
}

export default App
