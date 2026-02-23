import express from "express";
const app = express();
app.listen(8080);

const auth = (req, res, next) => {
    console.log("Auth middleware running");
    next();
}

app.use(auth)

app.get("/", (req, res) => {
    res.send("Welcome")
})