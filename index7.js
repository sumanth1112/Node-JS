import express from 'express'

const app = express()
app.listen(8080, () => {
    console.log("Server Started")
})

const users = [
    {id: 1, name: "John", email: "john@gmail.com", role: "Student"},
    {id: 2, name: "Cathy", email: "cathy@gmail.com", role: "Student"},
    {id: 3, name: "Admin", email: "admin@gmail.com", role: "admin"}
]

app.get("/", (req, res) => {
    res.send(users)
})

app.get("/:idx", (req, res) => {
    const idx = parseInt(req.params.idx);
    res.send(users[idx]);
});

// app.get("/", (req, res) => {
//     const user = {
//         name: "John",
//         email: "john@gmail.com",
//         role: "Student"
//     }
//     res.send(user)
// })