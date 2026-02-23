import express from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
const secretKey = "mysecretkey";

const app = express();
app.listen(8080, () => {
  console.log("server is starting");
});
const middleware = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader)
    return res.status(401).json({ message: "Authorization header missing" });
  const token = authHeader.split(" ")[1];
  try {
    const decoded = jwt.verify(token, secretKey);
    req.user = decoded;
    console.log("middleware executed");
    next();
  } catch (err) {
    res.status(401).json({ message: "Invalid token" });
  }
};

const authorize = (...allowedRoles) => (req, res, next) => {
  const user = req.user;
  if (!user) return res.status(401).json({ message: "Unauthorized" });
  if (!allowedRoles.includes(user.role))
    return res.status(403).json({ message: "Forbidden" });
  next();
};
app.use(express.json());
const users = [];
app.post("/signup", (req, res) => {
  const body = req.body;
  body.role = body.role || "user";
  const hasPassword = bcrypt.hashSync(body.password, 10);
  body.password = hasPassword;
  users.push(body);
  res.json(users);
});
app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const user = users.find((u) => u.email === email);
  if (!user) return res.status(401).json({ message: "invalid credentials" });

  const ckPassword = await bcrypt.compare(password, user.password);

  if (ckPassword)
    res.json({
      message: "login successful",
      token: jwt.sign({ email: user.email, role: user.role }, secretKey, {
        expiresIn: "1h",
      }),
    });
  else res.status(401).json({ message: "invalid credentials" });
});
app.get("/", middleware, authorize("admin", "manager"), (req, res) => {
  res.json({ message: "welcome to home page" });
});
app.get("/users", (req, res) => {
  res.json(users);
});