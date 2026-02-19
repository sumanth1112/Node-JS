import express from 'express';
const app = express();
app.listen(8080, ()=>{
    console.log("server started")
})
app.get("/",(a,b) => {
    console.log(a.headers)
})