const inputBox = document.getElementById(`input-box`)
const listContainer = document.getElementById(`list-container`)
let delBtn = document.getElementById(`del`)
delBtn.classList.add('clearButton')

function addTask() {
    if (inputBox.value === "") {
        alert(`You didn't write anything to add`);
    } else {
        let li = document.createElement(`li`);
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li)
        let span = document.createElement(`span`)
        span.innerHTML = "\u00d7"
        li.appendChild(span)
    }
    inputBox.value = '';
    savedata();
}
delBtn.addEventListener('click', () => {
    while (listContainer.firstChild) {
        listContainer.removeChild(listContainer.firstChild)
    }
    input.value = "";
    savedata();
})

listContainer.addEventListener('click', function (e) {
    if (e.target.tagName === 'LI') {
        e.target.classList.toggle(`checked`)
        savedata();
    }
    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        savedata();
    }
}, false);
function savedata() {
    localStorage.setItem(`data`, listContainer.innerHTML);
}
function showTask() {
    listContainer.innerHTML = localStorage.getItem('data')
}
showTask();

