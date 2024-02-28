import Task from "./Task"

export default function ShowTasks({ taskList, onSubmit, filterType }) {
    const handleToggle = (index) => {
        const updatedTaskList = [...taskList];
        updatedTaskList[index].completed = !updatedTaskList[index].completed;
        onSubmit(updatedTaskList);
    }

    const deleteTask = (index) => {
        const updatedTaskList = [...taskList];
        updatedTaskList.splice(index, 1);
        onSubmit(updatedTaskList);
    }

    const editTask = (index, newTask) => {
        const updatedTaskList = [...taskList];
        updatedTaskList[index].name = newTask;
        onSubmit(updatedTaskList);
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
                    <li key={task.id}>
                        <Task 
                            index={index}
                            name={task.name}
                            completed={task.completed}
                            toggleTask={handleToggle}
                            deleteTask={deleteTask}
                            editTask={editTask}
                        />
                    </li>
                    
                )}
            </ul>
        </>
    )
}