
const tasks = [];
document.addEventListener("deviceready", addTask, false);
document.addEventListener("load",loadPage,false);
const savedTasks = [];
if(localStorage.getItem("tasks") != null){
    savedTasks.push(localStorage.getItem("tasks"));
}


function loadPage(){
    dipslay();
}


function addTask(){
    var task = document.getElementById("task").value;
    if(task === '' || task == null){
        alert("Empty task");
        return;
    }
    savedTasks.push(task);
    window.localStorage.setItem("tasks",savedTasks);
    dipslay();
}

function clearTask(){
    tasks.length = 0;
    savedTasks.length = 0;
    localStorage.clear();
    document.getElementById("tasks").innerHTML = "";
}

function dipslay(){
    const tasksOnStorage = localStorage.getItem("tasks");
    const textarea = document.getElementById("tasks");
    const taskElements = tasksOnStorage.split(',');
    const outputText = taskElements.join('\n');
    textarea.innerHTML = outputText;
}

