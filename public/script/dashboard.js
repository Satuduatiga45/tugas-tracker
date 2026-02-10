
// add data button - index.html
const addDataButton = document.getElementById("add")
addDataButton?.addEventListener("click", () => window.location.href = "new-tugas.html")

// edit data button - index.html
let editDataButton = document.querySelectorAll("button.edit")
editDataButton.forEach(e => {
    e.addEventListener("click", () => window.location.href = "edit-tugas.html")
})

// load get API
document.addEventListener("DOMContentLoaded", getTugas)