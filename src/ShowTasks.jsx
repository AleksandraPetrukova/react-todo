import Task from "./Task"

export default function ShowTasks() {
    const dummyData = [
        {id: 1, name: "Task 1", completed: true},
        {id: 2, name: "Task 2", completed: false},
        {id: 3, name: "Task 3", completed: false},
    ]
    return (
        <>
            <h2>Tasks</h2>
            <ul>
                {dummyData.map(task => <Task key={task.id} name={task.name} completed={task.completed} />)}
            </ul>
        </>
    )
}