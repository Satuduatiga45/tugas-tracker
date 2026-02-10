const submit = document.getElementById('submit')



// REST API POST
async function postTugas() {
    // data dari form
    let payload = {
        tugas: document.getElementById("tugas").value,
        description: document.getElementById("description").value,
        date: document.getElementById("due-date").value,
        time: document.getElementById("due-time").value
    }

    try {
        const response = await fetch('http://localhost:8080/api/tugas', {
            method: "POST",
            headers: {
                "Content-Type": 'application/json'
            },
            body: JSON.stringify(payload)
        })
        if (!response.ok) {
            throw new Error(`error status: ${response.status}`)
        }

        const result = await response.json()
        console.log(result)
        console.log(JSON.stringify(payload))
    } catch (err) {
        console.log(err)
    }

    // kembali ke dashboard
    window.location.href = "index.html"
}

submit.addEventListener('click', postTugas)

