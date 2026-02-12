
// add data button
const addDataButton = document.getElementById("add")
addDataButton.addEventListener("click", () => window.location.href = "new-tugas.html")

// load get API

const listTugas = document.getElementById("list-tugas")

function renderTugas() {
    getTugas().then(tugas => {

        let html = ""
        tugas.forEach(e => {
            const pinSymbol = (e.is_pinned) ? "&#9733;" : "&#9734";
            const template = `<div class="item" data-id="${e.id}">
            <div class="text" id="date">
            <span id="tanggal">${e.date}</span>
            <span id="waktu">${e.time}</span>
            </div>
            <div class="text" id="task">
            <span id="judul">${e.tugas}</span><span class="details">See details</span>
            </div>
            <div class="text">
            <span id="pin">${pinSymbol}</span> <!-- &#9733; filed star -->
            </div>
            <button class="btn done">
            DONE
            </button>
            <button class="btn edit">
            EDIT
            </button>
            <button class="btn delete">
            DELETE
            </button>
            </div>`
            html += template
        })
        listTugas.innerHTML = html;
    }).catch(err => console.log(err))
}

document.addEventListener("DOMContentLoaded", renderTugas)

document.addEventListener('click', e => {
    
    // delete tugas
    if (e.target.classList.contains('delete')) {
        e.target.parentElement.remove()
        deleteTugas(e.target.parentElement.dataset.id)
    }

    // edit tugas
    if (e.target.classList.contains('edit')) {
        // href ke halaman edit tugas dengan url params sesuai dengan id data
        window.location.href = `edit-tugas.html?id=${e.target.parentElement.dataset.id}`
    }
})