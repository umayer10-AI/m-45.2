import tasks from "../data/data.json"

export const bookData = async () => {
    return tasks
}

export const postTask = async (newTask) => {
    newTask.id = tasks.length + 1;
    tasks.push(newTask)
    console.log(newTask,tasks.length)
    
    return {ok: true, messege: "Successfully"}
}