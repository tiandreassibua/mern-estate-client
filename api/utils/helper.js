import bcryptjs from "bcryptjs";

export const hashPassword = (password) => {
    return bcryptjs.hashSync(password, 10);
};
