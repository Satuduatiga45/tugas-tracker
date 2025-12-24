// add data button - index.html
const addDataButton = document.getElementById("add")
addDataButton.addEventListener("click", () => window.location.href = "new-tugas.html")

// edit data button - index.html
const editDataButton = document.getElementById("edit")
editDataButton.addEventListener("click", () => window.location.href = "edit-tugas.html")


// koneksi API
const API_URL = 'http://localhost:8080/api/tugas'
const listTugas = document.getElementById("list-tugas")
const formNewTugas = document.getElementById("form-new-tugas")

async function getTugas() {
    try {
        
        const response = await fetch(API_URL);
        if (!response.ok) {
            throw new Error(`error status: ${response.status}`)
        }
        const tugas = await response.json()
        renderTugas(tugas)

    } catch (error) {
        console.error(error)
    }
}

function renderTugas(tugas) {
    let html = ""
    tugas.forEach(e => {
        const pinSymbol = (e.pin) ? "&#9733;" : "&#9734";
        const template = `<div class="item">
        <div class="text" id="date">
        <span id="tanggal">${dateFormat(e.date)}</span>
        <span id="waktu">${e.time}</span>
        </div>
        <div class="text" id="task">
        <span id="judul">${e.tugas}</span><span id="details">See details</span>
        </div>
        <div class="text">
        <span id="pin">${pinSymbol}</span> <!-- &#9733; filed star -->
        </div>
        <button class="btn" id="done">
        DONE
        </button>
        <button class="btn" id="edit">
        EDIT
        </button>
        <button class="btn" id="delete">
        DELETE
        </button>
        </div>`
        html += template
    });
    console.log(html)
    listTugas.innerHTML = html;
}

function dateFormat(date) {
    const months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]
    const d = new Date(date)
    const month  = months[d.getMonth()]
    
    return `${d.getDate()} ${month} ${d.getFullYear()}`
    
}

async function postTugas() {
    try {
        const 
    }
}


document.addEventListener("DOMContentLoaded", getTugas)

