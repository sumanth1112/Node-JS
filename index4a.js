import express from 'express';

const app = express();
app.listen(8080, () => {
    console.log("Server Started");
})

app.get("/:a/:b", (req, res) => {
    const sum = parseInt(req.params.a) + parseInt(req.params.b);
    res.send(sum);
})

app.get("/x/:a/y/:b/z/:c", (req, res) => {
    const sum = parseInt(req.params.a) + parseInt(req.params.b) + parseInt(req.params.c);
    res.send(sum);
})

app.get("/:id/:id1/:id2/:id3", (req, res) => {
    res.send("Hello Students!")
})