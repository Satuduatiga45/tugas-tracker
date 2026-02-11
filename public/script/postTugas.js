const submit = document.getElementById('submit')

submit.addEventListener('click', postTugas)

// cancel button kembali ke dashboard
document.getElementById("cancel").addEventListener('click', () => window.location.href = "index.html")

