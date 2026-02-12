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
        return tugas

    } catch (error) {
        console.error(error)
    }
}

async function getTugasByID(id) { 
    const data = await getTugas()
    return data.find(e => e.id == id)
}

// POST
async function postTugas(tugas, description, time, date) {
    // data dari form
    const payload = {
        tugas: tugas,
        description: description,
        date: date,
        time: time
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

// UPDATE 
async function updateTugas(id, tugas, description, date, time) {
    const payload = {
        tugas: tugas,
        description: description,
        date: date,
        time: time
    }
    console.log(`${API_URL}/${id}`)

    try {
        const response = await fetch(`${API_URL}/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(payload)
        })
        if (!response.ok) {
            throw new Error(`Error status: ${response.status}`)
        }
    } catch (error) {
        console.log(error)
    }

    // kembali ke dashboard
    window.location.href = "index.html"
}




