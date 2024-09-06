const jwt = require("jsonwebtoken");
const userModel = require("../Models/userModel");
require("dotenv").config();

module.exports = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;
    const authToken = authHeader && authHeader.split(" ")[1];

    if (!authToken) {
      return res.json({
        message: "No Auth Token Found",
        status: false,
      });
    }

    let decoded;
    try {
      decoded = jwt.verify(authToken, process.env.USER_SECRET_KEY);
    } catch (error) {
      if (error.name === "TokenExpiredError") {
        return res.json({
          message: "Token has expired",
          status: false,
        });
      }
      if (error.name === "JsonWebTokenError") {
        return res.json({
          message: "Invalid Token",
          status: false,
        });
      }
      console.error("Error verifying token", error);

      return res.json({
        message: "Internal Server Error",
        status: false,
      });
    }

    const user = await userModel.findOne({ _id: decoded.userId });

    if (!user) {
      return res.json({
        message: "Unauthorized access",
        status: false,
      });
    }

    req.user = user;
    next();
  } catch (error) {
    console.error("Middleware Error : ", error);
    return res.json({
      message: "Internal Server Error",
      status: false,
    });
  }
};
