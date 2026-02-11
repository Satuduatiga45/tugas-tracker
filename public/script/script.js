// koneksi API
const API_URL = 'http://localhost:8080/api/tugas'

// GET
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

// POST
async function postTugas() {
    // data dari form
    let payload = {
        tugas: document.getElementById("tugas").value,
        description: document.getElementById("description").value,
        date: document.getElementById("due-date").value,
        time: document.getElementById("due-time").value
    }

    try {
        const response = await fetch(API_URL, {
            method: "POST",
            headers: {
                "Content-Type": 'application/json'
            },
            body: JSON.stringify(payload)
        })
        if (!response.ok) {
            throw new Error(`error status: ${response.status}`)
        }

    } catch (err) {
        console.log(err)
    }

    // kembali ke dashboard
    window.location.href = "index.html"
}

// DELETE
async function deleteTugas(id) {
    try {
        const response = await fetch(`${API_URL}/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        })
        if (!response.ok) {
            throw new Error(`error status: ${response.status}`)
        }
    } catch (err) {
        console.log(err)
    }
}




