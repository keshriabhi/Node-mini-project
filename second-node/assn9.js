const Tasks = {
    task : [
        {
            text : 'Grocerry Shopping',
            completed : true
        },
        {
            text : 'Clean yard',
            completed : false
        },
        {
            text : 'Film course',
            completed : false
        }
    ],
    getTasksToDo(){
        // const taskTodo = this.task.filter(item => item.completed === false)
        // return taskTodo;
        return this.task.filter(item => item.completed === false)   
    }
}

console.log(Tasks.getTasksToDo())