import "./assets/style.css"
import CreateTask from "./CreateTask"
import ShowTasks from "./ShowTasks"
import FilterTasks from "./FilterTasks"

function App() {
    return (
        <section className="section">
            <h1>Task List</h1>
            <CreateTask />
            <FilterTasks />
            <ShowTasks />
        </section>
    )
}

export default App
