import express from 'express';

const app = express();
const PORT = process.argv[2];

app.listen(PORT, () => {
    console.log(`Server Started on port ${PORT}`);
});

app.get("/", (req, res) => {
    const num1 = Number(process.argv[3]);
    const num2 = Number(process.argv[4]);

    res.send(`Sum is ${num1 + num2}`);
});