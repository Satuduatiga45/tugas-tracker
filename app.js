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
const queryGet = "SELECT id, tugas, description, DATE_FORMAT(date, '%e %b %Y') AS date, DATE_FORMAT(time, '%H:%i') AS time, is_pinned, is_completed FROM tugas_table ORDER BY CASE WHEN is_pinned THEN 1 ELSE 2 END ASC"

app.get("/api/tugas", (req,res) => {
    db.query(queryGet, (err, result, fields) => {
        if (err) {
            return res.status(500).json({message: "tidak berhasil mengambil data dari database"})
        } 
        res.json(result)
    })
});

// create
const queryPost = "INSERT INTO tugas_table (tugas, description, date, time) VALUES (?,?,?,?)"
app.post("/api/tugas", (req,res) => {
    const {tugas, description, date, time} = req.body;
    
    db.query(queryPost,[tugas, description, date, time], (err, result) => {{
        if (err) {
            return res.status(400).json({message: "gagal menyimpan data"})
        }
        res.status(201).json({message: "berhasil menyimpan data", data: result})

    }})
})

// delete
const queryDelete = "DELETE FROM tugas_table WHERE id = ?"
app.delete("/api/tugas/:id", (req, res) => {
    const idTugas = req.params.id;
    db.query(queryDelete, [idTugas], (err) => {
        if (err) {
            return res.status(400).json({message: "gagal menghapus data"})
        } 
        res.status(204).json({message: "berhasil menghapus data"})
    })
})


// update
const queryUpdate = "UPDATE tugas_table SET tugas = ?, description = ?, date = ?, time = ? WHERE id = ?"
app.put('/api/tugas/:id', (req, res) => {
    const {tugas, description, date, time} = req.body;
    const idTugas = req.params.id;
    
    db.query(queryUpdate,[tugas, description, date, time, idTugas], (err, result) => {{
        if (err) {
            return res.status(400).json({message: "gagal menyimpan data"})
        }
        res.status(200).json({message: "berhasil menyimpan data", data: result})

    }})
})

// toggle is_pinned
const queryToggleIsPinned = "UPDATE tugas_table SET is_pinned = NOT is_pinned WHERE id = ?"
app.put("/api/tugas/pin/:id", (req, res) => {
    const idTugas = req.params.id
    db.query(queryToggleIsPinned,[idTugas], (err, result) => {{
        if (err) {
            return res.status(400).json({message: "gagal menyimpan data"})
        }
        res.status(200).json({message: "berhasil menyimpan data", data: result})

    }})
})



app.listen(port, (err) => {
    console.log(`API on http://localhost:${port}/api/tugas`)
})