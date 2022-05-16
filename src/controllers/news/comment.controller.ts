const mongoose = require("mongoose");
import { Request, Response } from "express";
const asyncHandler = require("express-async-handler");
const Comment = require("../../models/news/comment.model");

interface IUserReq extends Request {
  user?: any;
}

//@desc    Add new comment
//@router  POST /api/comment/add
//@access  User
const postComment = asyncHandler(async (req: IUserReq, res: Response) => {
  const userId = req.user.id;
  try {
    const comment = new Comment(Object.assign(req.body, { user: userId }));
    const postComment = await comment.save();
    res.status(200).json(postComment);
  } catch (error) {
    res.status(500).json(error);
  }
});

//@desc    Update comment
//@router  POST /api/comment/:id
//@access  User
const updateComment = asyncHandler(async (req: Request, res: Response) => {
  try {
    const update = await Comment.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(update);
  } catch (error) {
    res.status(500).json(error);
  }
});

//@desc    get all comment
//@router  GET /api/comment/:id
//@access  User
const getComment = asyncHandler(async (req: Request, res: Response) => {
  try {
    const comments = await Comment.find({ news: req.params.id })
      .populate({
        path: "user",
        select: "firstname lastname avatar",
      })
      .sort("-createdAt");
    res.status(200).json(comments);
  } catch (error) {
    res.status(500).json(error);
  }
});

//@desc    delete comment
//@router  DELETE /api/comment/:id
//@access  User
const deleteComment = asyncHandler(async (req: Request, res: Response) => {
  try {
    await Comment.findByIdAndDelete(req.params.id);
    res.status(200).json("The comment has been deleted...!");
  } catch (error) {
    res.status(500).json(error);
  }
});

export { postComment, getComment, updateComment, deleteComment };
