import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
import { errorHandler } from "./error.js";

export const hashPassword = (password) => {
    return bcryptjs.hashSync(password, 10);
};

export const comparePassword = (password, hashedPassword) => {
    return bcryptjs.compareSync(password, hashedPassword);
};

export const generateToken = (payload) => {
    return jwt.sign(payload, process.env.JWT_SECRET);
};

export const verifyToken = (req, res, next) => {
    const token = req.cookies.access_token;

    if (!token) return next(errorHandler(401, "Unauthorized"));

    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if (err) return next(errorHandler(403, "Forbidden"));

        req.user = user;
        next();
    });
};
