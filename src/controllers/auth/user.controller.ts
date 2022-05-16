import { Request, Response } from "express";
const asyncHandler = require("express-async-handler");
const generateToken = require("../../utils/generateToken");
const User = require("../../models/auth/user.model");

interface IUserReq extends Request {
  user?: any;
}

//@desc    get user profile
//@router  GET /api/user/profile
//@access  User
const getUserProfile = asyncHandler(async (req: IUserReq, res: Response) => {
  const user = await User.findById(req.user._id);

  if (user) {
    res.json({
      _id: user._id,
      firstname: user.firstname,
      lastname: user.lastname,
      email: user.email,
      avatar: user.avatar,
      role: user.role,
    });
  } else {
    res.status(404);
    throw new Error("Không tìm thấy người dùng");
  }
});

//@desc    update user profile
//@router  PUT /api/user/profile
//@access  User
const updateUserProfile = asyncHandler(async (req: IUserReq, res: Response) => {
  const user = await User.findById(req.user._id);

  if (user) {
    user.firstname = req.body.firstname || user.firstname;
    user.lastname = req.body.lastname || user.lastname;
    user.avatar = req.body.avatar || user.avatar;
    if (req.body.password) {
      user.password = req.body.password;
    }

    const updateUser = await user.save();

    res.json({
      success: true,
      token: `Bearer ${generateToken(updateUser._id)}`,
      user: {
        firstname: updateUser.firstname,
        lastname: updateUser.lastname,
        avatar: updateUser.avatar,
      },
    });
  } else {
    res.status(404);
    throw new Error("Không tìm thấy người dùng");
  }
});

//@desc    get all user
//@router  GET /api/user
//@access  Admin
const getUsers = asyncHandler(async (req: Request, res: Response) => {
  try {
    const getUsers = await User.find({}, "-password");
    res.status(200).json(getUsers);
  } catch (error) {
    res.status(500).json(error);
  }
});

//@desc    get user by Id
//@router  GET /api/user/:id
//@access  Admin
const getUserById = asyncHandler(async (req: IUserReq, res: Response) => {
  try {
    const user = req.params.id;
    const userDoc = await User.findById(user, { password: 0 });

    res.status(200).json(userDoc);
  } catch (error) {
    res.status(400).json({
      error: "Your request could not be processed. Please try again.",
    });
  }
});

//@desc    update user
//@router  PUT /api/user/:id
//@access  Admin
const updateUser = asyncHandler(async (req: Request, res: Response) => {
  const user = await User.findById(req.params.id);

  if (user) {
    user.firstname = req.body.firstname || user.firstname;
    user.lastname = req.body.lastname || user.lastname;
    user.email = req.body.email || user.email;
    user.role = req.body.role;

    const updateUser = await user.save();

    res.json({
      success: true,
      user: {
        _id: updateUser._id,
        name: updateUser.name,
        email: updateUser.email,
        role: updateUser.role,
      },
    });
  } else {
    res.status(404);
    throw new Error("Không tìm thấy người dùng");
  }
});

//@desc    delete user
//@router  DELETE /api/user/:id
//@access  Admin
const deleteUser = asyncHandler(async (req: Request, res: Response) => {
  const user = await User.findById(req.params.id);

  if (user) {
    await user.remove();
    res.json({ message: "Đã xóa tài khoản" });
  } else {
    res.status(404);
    throw new Error("Không tìm thấy người dùng");
  }
});

export {
  getUserProfile,
  updateUserProfile,
  getUsers,
  getUserById,
  updateUser,
  deleteUser,
};
