const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");


//  Alert - button click show list but not working

function addTask() {
    if(inputBox.value === '') {
        alert("You must write something")       // Alert
    }
    else {
        let li = document.createElement("li")
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);

        let span = document.createElement("span");         // cross icon
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }    

    inputBox.value = '';    // clear input field after click Add
    saveData();
}


// click the task -> Check & Uncheck the task 

listContainer.addEventListener("click", function(e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData()
    }
    else if (e.target.tagName === "SPAN") {      // remove the task
        e.target.parentElement.remove();
        saveData()
    }
}, false);


// local storage

function saveData(){
    localStorage.setItem("data" , listContainer.innerHTML);
}

function showTask() {
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();