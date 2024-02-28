import Task from "./Task"

export default function ShowTasks({ taskList, setTaskList }) {
    function handleToggle(index) {
        const updatedTaskList = [...taskList];
        updatedTaskList[index].completed = !updatedTaskList[index].completed;
        setTaskList(updatedTaskList);
    }

    function deleteTask(index) {
        const updatedTaskList = [...taskList];
        updatedTaskList.splice(index, 1);
        setTaskList(updatedTaskList);
    }

    return (
        <>
            <h2>Tasks</h2>
            <ul>
                {taskList.map((task, index) => 
                    <Task 
                        key={index}
                        index={index}
                        name={task.name}
                        completed={task.completed}
                        toggleTask={handleToggle}
                        deleteTask={deleteTask}
                    />)}
            </ul>
        </>
    )
}