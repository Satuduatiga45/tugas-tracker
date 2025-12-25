const btnCancel = document.getElementById('cancel')
btnCancel.addEventListener('click', () => window.location.href = "index.html")

// FORM POST - New Tugas
// import { API_URL } from "./script.js"

const formNewTugas = document.getElementById("form-new-tugas")

async function postTugas(data) {
    try {
        const response = await fetch("http://localhost:8080/api/tugas", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        
        if (!response.ok) {
            throw new Error(`error status: ${response.status}`)
        }
        
    } catch (error) {
        console.log(error)
    }
}


formNewTugas.addEventListener("submit", (e) => {
    // e.preventDefault()

    const form = new FormData(formNewTugas)
    
    const payload = {
        tugas: form.get("tugas"),
        description: form.get("description"),
        date: form.get("date"),
        time: form.get("time")
    }

    postTugas(payload)
    
    // redirect ke index.html
    
})