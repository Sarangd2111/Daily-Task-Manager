const addTaskBtn = document.getElementById('addTaskBtn');
const taskForm = document.getElementById('taskForm');
const taskList = document.getElementById('taskList');
const listNavBtn = document.getElementById('listNav');
const sideNavList = document.getElementById('sideNavList');
const list = document.getElementById('list');
const taskNameInput = document.getElementById('taskName');
const taskDetailsInput = document.getElementById('taskDetails');
const startTimeInput = document.getElementById('startTime');
const endTimeInput = document.getElementById('endTime');
// const taskImageInput = document.getElementById('taskImage');
const saveTaskBtn = document.getElementById('saveTask');
let task_id_no=0;

addTaskBtn.addEventListener('click', () => {
    taskForm.classList.toggle('open')
    if (addTaskBtn.innerHTML == "Add Task") {
        addTaskBtn.innerHTML = "Close"
    }
    else if (addTaskBtn.innerHTML == "Close") {
        addTaskBtn.innerHTML = "Add Task"
    }
});

listNavBtn.addEventListener('click', ()=>{
   listNavBtn.classList.toggle('slide')
    list.classList.toggle('open');
    if (listNavBtn.innerHTML == "Tasks") {
        listNavBtn.innerHTML = "Close"
    }
    else if (listNavBtn.innerHTML == "Close") {
        listNavBtn.innerHTML = "Tasks"
    }
})

saveTaskBtn.addEventListener('click', () => {
    const taskName = taskNameInput.value;
    const startTime = startTimeInput.value;
    const endTime = endTimeInput.value;
    const taskDetails = taskDetailsInput.value

    if (taskName.trim() === '' || startTime === '' || endTime === '') {
        alert('Please enter a task name, start time, and end time.');
        return;
    }
    
    const taskItem = document.createElement('li');
    taskItem.className = 'task';
    // taskItem.style.backgroundImage = `url(${taskInputImage})`;
    // taskItem.style.backgroundSize = 'cover';
    // taskItem.style.backgroundPosition = 'center';
    taskItem.innerHTML = `
    <div class="head">
        <span>${taskName}</span>
    </div>
    <div class="timeslot">
        <div class="head">
            <span>Time</span>
        </div>
        <p>Start: ${startTime}</p> <br/>
        <p>End: ${endTime}</p>
    </div>
    
    <div class="comment">
        <div class="head">
            <span>Details</span>
        </div>
        <p>${taskDetails}</p>
    </div>
    <div class="task-actions">
        <button class="complete-task">Complete</button>
        <button class="delete-task">Delete</button>
    </div>`;
    // taskItem.style.backgroundImage ${taskImage};
    taskList.appendChild(taskItem);

    const listItem = document.createElement('li');
    taskItem.id = task_id_no++;
    // listItem.id = task_id_no-1;
    listItem.innerHTML = `<a href=#${taskItem.id}>${taskName}</a>`
    sideNavList.appendChild(listItem);

    taskNameInput.value = '';
    startTimeInput.value = '';
    endTimeInput.value = '';
    taskForm.style.display = 'none';



    // Add event listeners for delete and complete buttons
    const deleteBtn = taskItem.querySelector('.delete-task');
    const completeBtn = taskItem.querySelector('.complete-task');

    deleteBtn.addEventListener('click', () => {
        taskItem.remove();
        listItem.remove();
    });

    completeBtn.addEventListener('click', () => {
        taskItem.classList.add('completed-task');
        listItem.classList.add('completed-task');
        completeBtn.style.display = 'none';
    });

});

// saveTaskBtn.addEventListener('submit', () => {
//     addTaskBtn.innerHTML = "Add Task"
// })