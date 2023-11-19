import User from "../models/user.model.js";
import { errorHandler } from "../utils/error.js";
import { hashPassword } from "../utils/helper.js";

export const signup = async (req, res, next) => {
    const { username, email, password } = req.body;
    try {
        const hashedPassword = hashPassword(password);
        const newUser = new User({ username, email, password: hashedPassword });
        await newUser.save();
        res.status(201).json({ message: "User created successfully" });
    } catch (error) {
        next(error);
    }
};
