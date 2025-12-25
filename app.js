const express = require("express");
const cors = require("cors")

const app = express()
const port = 8080;

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))

let database = []
let currentID = 0;

// read
app.get("/api/tugas", (req,res) => {
    res.json(database)
});

// create
app.post("/api/tugas", (req,res) => {
    const {tugas, description, date, time} = req.body;

    if (!tugas || !date || !time) {
        return res.status(400).json({message: "input ada yang kosong"})
    }

    const newData = {
        id:currentID++,
        tugas: tugas,
        description: description,
        date: date,
        time: time,
        done: false,
        pin: false
    };

    database.push(newData)
    res.status(201).json(newData)
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

// delete
app.delete("/api/tugas/:id", (req, res) => {
    const idReq = parseInt(req.params.id);
    const databaseIndex = database.findIndex(data => data.id === idReq)

    if (databaseIndex === -1) {
        return res.status(404).json({message: "data tidak ditemukan"});
    }

    database.splice(databaseIndex, 1)

    res.status(204).send();
})


app.listen(port, (err) => {
    console.log(`API on http://localhost:${port}/api/tugas`)
})