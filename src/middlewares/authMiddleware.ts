import { Request, Response, NextFunction } from "express";
const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");
const User = require("../models/auth/user.model");

interface IUserReq extends Request {
  user?: any;
}

const ROLES = {
  Admin: "admin",
  Staff: "staff",
  Customer: "user",
};

//Verify token
const verify = asyncHandler(
  async (req: IUserReq, res: Response, next: NextFunction) => {
    let token;

    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith("Bearer")
    ) {
      try {
        token = req.headers.authorization.split(" ")[1];

        const decode = jwt.verify(token, process.env.JWT_SECRET);

        req.user = await User.findById(decode.id).select("-password");

        next();
      } catch (error) {
        res.status(401);
        throw new Error("Not authorized, token failed!");
      }
    }

    if (!token) {
      res.status(401);
      throw new Error("Not authorized, no token");
    }
  }
);

const checkRole =
  (...roles) =>
  (req: IUserReq, res: Response, next: NextFunction) => {
    if (!req.user) {
      return res.status(401).send("Unauthorized");
    }
    const hasRole = roles.find((role) => req.user.role.includes(role));
    if (!hasRole) {
      return res.status(403).send("You are not allowed to make this request.");
    }
    return next();
  };

const role = { ROLES, verify, checkRole };
module.exports = role;
