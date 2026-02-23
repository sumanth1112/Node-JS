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

app.get("/:id", (req, res) => {
    const id = Number(req.params.id);

    const user = users.find((user) => user.id === id);

    if (user) {
        res.send(user);
    } else {
        res.status(404).send("User not found");
    }
});

// app.get("/", (req, res) => {
//     const user = {
//         name: "John",
//         email: "john@gmail.com",
//         role: "Student"
//     }
//     res.send(user)
// })