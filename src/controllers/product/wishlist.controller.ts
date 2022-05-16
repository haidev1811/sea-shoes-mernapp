import { Request, Response } from "express";
const asyncHandler = require("express-async-handler");
const Wishlist = require("../../models/product/wishlist.model");

interface IUserReq extends Request {
  user?: any;
}

//@desc    Add product to wishlist
//@router  POST /api/wishlist
//@access  User
const addToWishlist = asyncHandler(async (req: IUserReq, res: Response) => {
  try {
    const { product, isLiked } = req.body;
    const user = req.user;
    const update = {
      product,
      updated: Date.now(),
    };
    const query = { product: update.product, user: user._id };

    const updatedWishlist = await Wishlist.findOneAndUpdate(query, update, {
      new: true,
    });

    if (updatedWishlist !== null) {
      res.status(200).json({
        success: true,
        message: "Your Wishlist has been updated successfully!",
        wishlist: updatedWishlist,
      });
    } else {
      const wishlist = new Wishlist({
        product,
        user: user._id,
      });

      const wishlistDoc = await wishlist.save();

      res.status(200).json({
        success: true,
        message: `Added to your Wishlist successfully!`,
        wishlist: wishlistDoc,
      });
    }
  } catch (e) {
    return res.status(400).json({
      error: "Your request could not be processed. Please try again.",
    });
  }
});

//@desc    Get wishlist
//@router  GET /api/wishlist
//@access  User
const getWishlist = asyncHandler(async (req: IUserReq, res: Response) => {
  try {
    const user = req.user._id;

    const wishlist = await Wishlist.find({ user })
      .populate({
        path: "product",
      })
      .sort("-updated");

    res.status(200).json({
      wishlist,
    });
  } catch (error) {
    res.status(400).json({
      error: "Your request could not be processed. Please try again.",
    });
  }
});

export { addToWishlist, getWishlist };
