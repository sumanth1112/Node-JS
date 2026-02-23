import express from 'express';
const app = express();
app.listen(8080, () => {
    console.log("Server Started");
})
let users = [
    {
        name:"Ekshin",
        email:"ekshin@gmail.com",
        role:"student"
    },
    {
        name:"Ajay",
        email:"ajay@gmail.com",
        role:"student"
    },
    {
        name:"Sumanth",
        email:"sumanth@gmail.com",
        role:"student"
    }
]

app.get("/",(req,res) => {
    res.send(users);
})

app.post("/", (req, res) => {
    const user = req.body.name
    users.push(user)
    response.name(users)
})