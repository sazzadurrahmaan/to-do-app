const addTodoForm = document.querySelector('.add-todo-form');
const todoTasks = document.querySelector('.todo-tasks');

const taskLists =[];
function handleSubmit(e){
    
        // console.log('form submitted');
        
        e.preventDefault();
    
       const inputData =e.target.insert.value;

    const task = {
        id:Date.now(),
        task :inputData,
        isCompleted :false,
    }

    taskLists.push(task) ;
    console.log(taskLists);
 e.target.reset();
const html =  taskLists.map(function(item){
    console.log(item.task);
    return `<li> ${(item.task)}</li>`;
}).join(" ");
   
   console.log(html);
   todoTasks.innerHTML =html;
}



addTodoForm.addEventListener('submit',handleSubmit)


