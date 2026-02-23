import express from 'express';
import bcrypt from 'bcrypt';
const app = express();
app.listen(8080, () => {
    console.log("Server started")
})
app.use(express.json());
const users = []
app.post("/login", async (req,res) => {
    const {email, password} = req.body;
    const found = users.find((user) => user.email === email);
    if(found){
    const match = await bcrypt.compare(password, found.password);
    if(match){
        res.status(200).json({message:"Login successful"});
    }else{
        res.status(401).json({message:"Invalid credentials"});
    }
}else{
    res.status(401).json({message:"User not found"});
}

})
app.post("/signup", async (req,res) => {
    const body = req.body;
    const hashpassword = await bcrypt.hash(body.password, 10);
    body.password = hashpassword;
    users.push(body);
    res.json(users);
})

app.get("/users",(req,res) => {
    res.json(users);
})