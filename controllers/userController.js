
import { users } from '../models/usermodel.js';

export const getUserData = (req, res) => {
    res.json(users);
}

export const postUserData = (req, res) => {
    res.send("User Data received from controller");
}
