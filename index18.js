import express from 'express';
const app = express();
const PORT = process.argv[2];
app.listen(PORT, () => {
    console.log(`Server Started on port ${PORT}`);
});

app.get("/", (req, res) => {
    res.send(`This Server is Running on port ${PORT}`);
});