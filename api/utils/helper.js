import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

export const hashPassword = (password) => {
    return bcryptjs.hashSync(password, 10);
};

export const comparePassword = (password, hashedPassword) => {
    return bcryptjs.compareSync(password, hashedPassword);
};

export const generateToken = (payload) => {
    return jwt.sign(payload, process.env.JWT_SECRET);
};
