import express from 'express'
import jwt from 'jsonwebtoken'

const SECRET = "lpu"

const app = express()
app.listen(8080, () => {
    console.log("Server Started...")
})

const user = {
    name: "John",
    email: "john@gmail.com",
    role: "student"
}

const token = jwt.sign(user, SECRET, {expiresIn: "1hr"})
console.log(token)