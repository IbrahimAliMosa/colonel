const addbtn = document.getElementById('btn');
const input = document.getElementById('task');
let tasks = document.getElementById('tasks');
let tasksList = [];

function addTask() {
    if (input.value.trim() === "") {

    }
    else {
        let task = input.value.trim();
        tasksList.push(task);
        console.log(task);
        const taskDiv = document.createElement('div');
        taskDiv.style.cssText = "display: flex;justify-content: space-evenly;align-items: center; padding:25px;";
        tasks.appendChild(taskDiv);

        const newtask = document.createElement('div');
        newtask.style.cssText = "text-align:left; background-color:rgb(255, 255, 255); margin-top:10px;margin-bottom:10px;margin-right:10px;border:none; border-radius:10px;width: 400px;height: fit-content;padding: 10px;font-size: 18px;font-weight: bold;";
        newtask.textContent = task;

        const delbtn = document.createElement("button");
        delbtn.textContent = "Delete Task"
        delbtn.style.cssText = " background-color: rgb(250, 125, 0);width:fit-content; height:fit-content; padding: 25px;font-size: 18px;color: white;cursor: pointer;font-weight: bold;border: none;border-radius: 10px;margin: auto;margin-top: 10px;"

        taskDiv.appendChild(newtask);
        taskDiv.appendChild(delbtn);
        // window.localStorage.setItem("tasks", newtask.textContent);
        input.value = "";
    }
}
// localStorage.clear();