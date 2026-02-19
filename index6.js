import express from 'express'
const app = express()
app.listen(8080, () => {
    console.log("Server Started")
})

app.get("/", (req, res) => {
    res.send("Hello " + req.query.name + req.query.age);
})