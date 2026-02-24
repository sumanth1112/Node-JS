import mongoose from 'mongoose'
import express from 'express'
const app = express()
app.listen(8080, () => {
    console.log("Server Started")
})

const dbConnect = async() => {
    await mongoose.connect("mongodb://localhost:27017/lpu26a")
}

const userSchema = mongoose.Schema({
    name: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    password: {type: String},
    role: {type: String}
})

await dbConnect()
const userModel = await mongoose.model("users", userSchema)
const users = await userModel.find()
console.log(users)

app.get("/", async (req, res) => {
    const result = await userModel.find()
    res.json(result)
})