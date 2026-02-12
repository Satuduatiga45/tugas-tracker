const submit = document.getElementById('submit')


submit.addEventListener('click', e => {
    const tugas = document.getElementById("tugas").value
    const description = document.getElementById("description").value
    const date =  document.getElementById("due-date").value
    const time =  document.getElementById("due-time").value
    
    e.preventDefault()
    postTugas(tugas, description, time, date)
})

// cancel button kembali ke dashboard
document.getElementById("cancel").addEventListener('click', () => window.location.href = "index.html")

