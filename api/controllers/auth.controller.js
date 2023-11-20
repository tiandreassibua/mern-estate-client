import User from "../models/user.model.js";
import { errorHandler } from "../utils/error.js";
import {
    comparePassword,
    generateToken,
    hashPassword,
} from "../utils/helper.js";

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

export const signin = async (req, res, next) => {
    const { email, password } = req.body;
    try {
        const validUser = await User.findOne({ email });
        if (!validUser) return next(errorHandler(404, "Invalid credentials"));

        const validPassword = comparePassword(password, validUser.password);
        if (!validPassword)
            return next(errorHandler(404, "Invalid credentials"));

        const token = generateToken({ id: validUser._id });
        const { password: pass, ...user } = validUser._doc;

        res.cookie("access_token", token, { httpOnly: true })
            .status(200)
            .json(user);
    } catch (error) {
        next(error);
    }
};
