import jwt from 'jsonwebtoken';

//generate jwt token and set cookies for later authentication
export const generateToken = (userId, res) => {
    const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
        expiresIn: "7d",
    });

    res.cookie("jwt", token, {
        maxAge: 7 * 24 * 60 * 60 * 1000,
        httpOnly: true,
        sameSite : "strict", 
        secure: process.env.NODE_ENV === "development" ? false : true,
    });

    return token;
}