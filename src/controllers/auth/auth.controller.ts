import { Request, Response } from "express";
const { OAuth2Client } = require("google-auth-library");
const asyncHandler = require("express-async-handler");
const crypto = require("crypto");
const bcrypt = require("bcryptjs");
const generateToken = require("../../utils/generateToken");
const User = require("../../models/auth/user.model");
const mailgun = require("../../services/mailgun");

interface IUserReq extends Request {
  user?: any;
}

//@desc    Auth user & get Token
//@router  POST /api/auth/login
//@access  Public
const loginUser = asyncHandler(async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    if (!email) {
      return res
        .status(400)
        .json({ error: "You must enter an email address." });
    }

    if (!password) {
      return res.status(400).json({ error: "You must enter a password." });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res
        .status(400)
        .send({ error: "No user found for this email address." });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({
        success: false,
        error: "Password Incorrect",
      });
    }

    res.status(200).json({
      success: true,
      token: `Bearer ${generateToken(user._id)}`,
      user: {
        _id: user._id,
        firstname: user.firstname,
        lastname: user.lastname,
        email: user.email,
        role: user.role,
      },
    });
  } catch (error) {
    res.status(400).json({
      error: "Your request could not be processed. Please try again.",
    });
  }
});

//@desc    Register a new user
//@router  POST /api/auth/register
//@access  Public
const registerUser = asyncHandler(async (req: Request, res: Response) => {
  const { firstname, lastname, email, password } = req.body;

  const userExits = await User.findOne({ email });

  if (userExits) {
    res.status(400);
    throw new Error("User already exists");
  }

  const user = await User.create({
    firstname,
    lastname,
    email,
    password,
  });

  if (user) {
    res.status(201).json({
      success: true,
      token: `Bearer ${generateToken(user._id)}`,
      user: {
        _id: user._id,
        firstname: user.firstname,
        lastname: user.lastname,
        email: user.email,
        role: user.role,
      },
    });
  } else {
    res.status(401);
    throw new Error("Invalid user data");
  }
});

//@desc    Forgot account
//@router  POST /api/auth/forgot
//@access  Public
const forgotUser = asyncHandler(async (req: Request, res: Response) => {
  try {
    const { email } = req.body;

    if (!email) {
      return res
        .status(400)
        .json({ error: "You must enter an email address." });
    }

    const existingUser = await User.findOne({ email });

    if (!existingUser) {
      return res
        .status(400)
        .send({ error: "No user found for this email address." });
    }

    const buffer = crypto.randomBytes(48);
    const resetToken = buffer.toString("hex");

    existingUser.resetPasswordToken = resetToken;
    existingUser.resetPasswordExpires = Date.now() + 3600000;

    existingUser.save();

    await mailgun.sendEmail(
      existingUser.email,
      "reset",
      req.headers.host,
      resetToken
    );

    res.status(200).json({
      success: true,
      message: "Please check your email for the link to reset your password.",
    });
  } catch (error) {
    res.status(400).json({
      error: "Your request could not be processed. Please try again.",
    });
  }
});

//@desc    Reset user token
//@router  POST /api/auth/reset/:token
//@access  Public
const resetUserToken = asyncHandler(async (req: Request, res: Response) => {
  try {
    const { password } = req.body;

    if (!password) {
      return res.status(400).json({ error: "You must enter a password." });
    }

    const resetUser = await User.findOne({
      resetPasswordToken: req.params.token,
      resetPasswordExpires: { $gt: Date.now() },
    });

    if (!resetUser) {
      return res.status(400).json({
        error:
          "Your token has expired. Please attempt to reset your password again.",
      });
    }

    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);

    resetUser.password = hash;
    resetUser.resetPasswordToken = undefined;
    resetUser.resetPasswordExpires = undefined;

    resetUser.save();

    await mailgun.sendEmail(resetUser.email, "reset-confirmation");

    res.status(200).json({
      success: true,
      message:
        "Password changed successfully. Please login with your new password.",
    });
  } catch (error) {
    res.status(400).json({
      error: "Your request could not be processed. Please try again.",
    });
  }
});

//@desc    Reset user
//@router  POST /api/auth/reset
//@access  Public
const resetUser = asyncHandler(async (req: IUserReq, res: Response) => {
  try {
    const { password, confirmPassword } = req.body;
    const email = req.user.email;

    if (!email) {
      return res.status(401).send("Unauthenticated");
    }

    if (!password) {
      return res.status(400).json({ error: "You must enter a password." });
    }

    const existingUser = await User.findOne({ email });
    if (!existingUser) {
      return res
        .status(400)
        .json({ error: "That email address is already in use." });
    }

    const isMatch = await bcrypt.compare(password, existingUser.password);

    if (!isMatch) {
      return res
        .status(400)
        .json({ error: "Please enter your correct old password." });
    }

    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(confirmPassword, salt);
    existingUser.password = hash;
    existingUser.save();

    await mailgun.sendEmail(existingUser.email, "reset-confirmation");

    res.status(200).json({
      success: true,
      message:
        "Password changed successfully. Please login with your new password.",
    });
  } catch (error) {
    res.status(400).json({
      error: "Your request could not be processed. Please try again.",
    });
  }
});

//@desc    Login google
//@router  POST /api/auth/google
//@access  Public
const clientGG = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);
const loginGoogle = asyncHandler(async (req: Request, res: Response) => {
  const { tokenId } = req.body;

  clientGG
    .verifyIdToken({ idToken: tokenId, audience: process.env.GOOGLE_CLIENT_ID })
    .then((response: any) => {
      const { email_verified, email, given_name, family_name, picture } =
        response.payload;

      let password = "abc123";

      if (email_verified) {
        User.findOne({ email }).exec((err: any, user: any) => {
          if (err) {
            res.status(401);
            throw new Error("Có lỗi xảy ra");
          } else {
            if (user) {
              res.json({
                success: true,
                token: `Bearer ${generateToken(user._id)}`,
                user: {
                  _id: user._id,
                  firstname: user.firstname,
                  lastname: user.lastname,
                  email: user.email,
                  avatar: user.avatar,
                  role: user.role,
                },
              });
            } else {
              const newUser = new User({
                firstname: given_name,
                lastname: family_name,
                email,
                avatar: picture,
                password,
              });
              newUser.save((err: any, data: any) => {
                console.log(data);
                if (err) {
                  res.status(401);
                  throw new Error("Có lỗi xảy ra");
                } else {
                  res.json({
                    success: true,
                    token: `Bearer ${generateToken(data._id)}`,
                    user: {
                      _id: data._id,
                      firstname: data.firstname,
                      lastname: data.lastname,
                      email: data.email,
                      role: data.role,
                    },
                  });
                }
              });
            }
          }
        });
      }
    });
});

export {
  loginUser,
  registerUser,
  forgotUser,
  resetUserToken,
  resetUser,
  loginGoogle,
};
