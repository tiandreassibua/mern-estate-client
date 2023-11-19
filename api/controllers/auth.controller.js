import User from "../models/user.model.js";
import { hashPassword } from "../utils/helper.js";

export const signup = async (req, res) => {
    const { username, email, password } = req.body;
    try {
        const hashedPassword = hashPassword(password);
        const newUser = new User({ username, email, password: hashedPassword });
        await newUser.save();
        res.status(201).json({ message: "User created successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
