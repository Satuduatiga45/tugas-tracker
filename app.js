const express = require("express");
const mysql = require("mysql")
const cors = require("cors")

const app = express()
const port = 8080;

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))

// MySQL connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'tugas_tracker'
})

// connect to db
db.connect((err) => {
    if (err) {
        console.error(err.stack)
    } 
    console.log(db.threadId)
})

// read
app.get("/api/tugas", (req,res) => {
    db.query("SELECT id, tugas, description, date, DATE_FORMAT(time, '%H:%i') AS time, is_pinned, is_completed FROM tugas_table", (err, result, fields) => {
        if (err) {
            return res.status(500).json({message: "tidak berhasil mengambil data dari database"})
        } 
        res.json(result)
    })
});

// create
app.post("/api/tugas", (req,res) => {
    const {tugas, description, date, time} = req.body;
    
    db.query("INSERT INTO tugas_table (tugas, description, date, time) VALUES (?,?,?,?)",[tugas, description, date, time], (err, result) => {{
        if (err) {
            return res.status(400).json({message: "gagal menyimpan data"})
        }
        res.status(201).json({message: "berhasil menyimpan data", data: req.body})

    }})
})

// delete
app.delete("/api/tugas/:id", (req, res) => {
    const idTugas = req.params.id;
    db.query("DELETE FROM tugas_table WHERE id = ?", [idTugas], (err) => {
        if (err) {
            return res.status(400).json({message: "gagal menghapus data"})
        } 
        res.status(204).json({message: "berhasil menghapus data"})
    })
})


// update
// toggle status done
// app.put("/api/tugas/:id", (req, res) => {
//     const idReq = parseInt(req.params.id);
//     const databaseIndex = database.findIndex(data => data.id === idReq)

//     if (databaseIndex === -1) {
//         return res.status(404).json({message: "data tidak ditemukan"});
//     }

//     database[databaseIndex].done = !database[databaseIndex].done;

//     res.json(database[databaseIndex])

// })

// // toggle status pin
// app.put("/api/tugas/:id", (req, res) => {
//     const idReq = parseInt(req.params.id);
//     const databaseIndex = database.findIndex(data => data.id === idReq)

//     if (databaseIndex === -1) {
//         return res.status(404).json({message: "data tidak ditemukan"});
//     }

//     database[databaseIndex].pin = !database[databaseIndex].pin

//     res.json(database[databaseIndex])

// })



app.listen(port, (err) => {
    console.log(`API on http://localhost:${port}/api/tugas`)
})