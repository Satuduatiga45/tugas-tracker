const submit = document.getElementById('submit')

const tugas = document.getElementById("tugas")
const description = document.getElementById("description")
const date =  document.getElementById("due-date")
const time =  document.getElementById("due-time")

// ambil id dari url params
const id = new URLSearchParams(window.location.search).get('id')


document.addEventListener('DOMContentLoaded', () => {
    getTugasByID(id).then(data => {
        // isi form dengan data lama
        tugas.value = data.tugas
        description.value = data.description
        date.value = new Date(data.date).toISOString().split('T')[0]
        time.value = data.time
    }).catch(err => console.log(err))
})

submit.addEventListener('click', e => {
    const tugas = document.getElementById("tugas").value
    const description = document.getElementById("description").value
    const date =  document.getElementById("due-date").value
    const time =  document.getElementById("due-time").value
    
    e.preventDefault()
    updateTugas(id, tugas, description, date, time)
    
})

// cancel button kembali ke dashboard
document.getElementById("cancel").addEventListener('click', () => window.location.href = "index.html")