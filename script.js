const inputBox = document.getElementById ("input-box")
const listContainer = document.getElementById ("list-container")


function addtask() {
    if(inputBox.value === ''){
        alert("Write a task first");
    }
    else{
        let li = document.createElement("Li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = '';
    saveData();
}

inputBox.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        addtask();
    }
});


listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if (e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }

}, false);



function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}


function showTask(){
    listContainer.innerHTML = localStorage.getItem("data")

}

showTask();