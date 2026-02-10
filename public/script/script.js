// koneksi API
const API_URL = 'http://localhost:8080/api/tugas'
const listTugas = document.getElementById("list-tugas")

// REST API GET
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
        const pinSymbol = (e.is_pinned) ? "&#9733;" : "&#9734";
        const template = `<div class="item" data-id="${e.id}">
        <div class="text" id="date">
        <span id="tanggal">${dateFormat(e.date)}</span>
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
        console.log(tugas)
    });
    listTugas.innerHTML = html;
}

function dateFormat(date) {
    const months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]
    const d = new Date(date)
    const month  = months[d.getMonth()]
    
    return `${d.getDate()} ${month} ${d.getFullYear()}`
    
}

function timeFormat(time) {

}




