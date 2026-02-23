import express from 'express'
import jwt from 'jsonwebtoken'
const app = express()

const SECRET = "lpu"

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiSm9obiIsImVtYWlsIjoiam9obkBnbWFpbC5jb20iLCJyb2xlIjoic3R1ZGVudCIsImlhdCI6MTc3MTgzNDI0OCwiZXhwIjoxNzcxODM3ODQ4fQ.hkdgX7BFPpGgT8sc88MrVowNyPuDj4RlrlpbntrZea8"

const user = jwt.verify(token, SECRET)
console.log(user)