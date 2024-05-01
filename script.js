var titleElement = document.getElementById("DynamicTitle");
titleElement.innerText = "TO-DO-LIST";
titleElement.innerHTML += '<img src="checked3.jpg" alt="Website Logo">';

const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
    if (inputBox.value === '') {
        alert("Your Input is Empty!");
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData();
}

listContainer.addEventListener("click", function(e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTask() {
    const savedData = localStorage.getItem("data");
    if (savedData !== null) {
        listContainer.innerHTML = savedData;
    }
}

showTask();
