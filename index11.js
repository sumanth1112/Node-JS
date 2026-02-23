import express from 'express';
const app = express();
app.listen(8080, () => { console.log("Server Started") });

// app.use(express.static("Images")); //to serve static files like images, css, js etc.);

app.use("/images", express.static("images")); //to serve static files from a specific route

// app.use("/public", express.static("public"));