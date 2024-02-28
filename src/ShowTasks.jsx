import Task from "./Task"

export default function ShowTasks({ taskList, setTaskList, filterType }) {
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

    function editTask(index, newTask) {
        const updatedTaskList = [...taskList];
        updatedTaskList[index].name = newTask;
        setTaskList(updatedTaskList);
    }

    const filteredTasks = taskList.filter(task => {
        if (filterType === 'all') {
            return true;
        } else if (filterType === 'active') {
            return !task.completed;
        } else if (filterType === 'completed') {
            return task.completed;
        }
    });

    return (
        <>
            <h2>Tasks</h2>
            <ul>
                {filteredTasks.map((task, index) => 
                    <Task 
                        key={index}
                        index={index}
                        name={task.name}
                        completed={task.completed}
                        toggleTask={handleToggle}
                        deleteTask={deleteTask}
                        editTask={editTask}
                    />)}
            </ul>
        </>
    )
}