import jwt from "jsonwebtoken";

import User from "../models/user.model.js";

//functionality to check if user is logged in
export const protectRoute = async (req, res, next) => {
  try {
    //if user logged in, it has jwt in cookies
    const token = req.cookies.jwt;

    if (!token) {
      return res
        .status(401)
        .json({ message: "Unauthorized - No token provided" });
    }

    //extract user id from jwt token and place user info in req
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    if (!decoded) {
      return res.status(401).json({ message: "Unauthorized - Invalid token" });
    }

    const user = await User.findById(decoded.userId).select("-password");

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    req.user = user;
    next();
  } catch (error) {
    console.log("Error in protectRoute middleware : ", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
