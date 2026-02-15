const express = require("express")
const cors = require("cors")
const routes = require("./routes")

const app = express()
const port = 8080;

// middleware
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))

// use routes
app.use("/api/tugas", routes)


app.listen(port, (err) => {
    console.log(`API on http://localhost:${port}/api/tugas`)
})