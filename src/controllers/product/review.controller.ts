const mongoose = require("mongoose");
import { Request, Response } from "express";
const asyncHandler = require("express-async-handler");
const Review = require("../../models/product/review.model");

interface IUserReq extends Request {
  user?: any;
}

//@desc    Add new review
//@router  POST /api/review/add
//@access  User
const postReview = asyncHandler(async (req: IUserReq, res: Response) => {
  const userId = req.user.id;
  try {
    const review = new Review(Object.assign(req.body, { user: userId }));
    const postReview = await review.save();
    res.status(200).json(postReview);
  } catch (error) {
    res.status(500).json(error);
  }
});

//@desc    Update review
//@router  POST /api/review/:id
//@access  User
const updateReview = asyncHandler(async (req: Request, res: Response) => {
  try {
    const update = await Review.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(update);
  } catch (error) {
    res.status(500).json(error);
  }
});

//@desc    get all review
//@router  GET /api/review/:id
//@access  User
const getReview = asyncHandler(async (req: Request, res: Response) => {
  try {
    const reviews = await Review.find({ product: req.params.id })
      .populate({
        path: "user",
        select: "firstname lastname avatar",
      })
      .sort("-createdAt");
    res.status(200).json(reviews);
  } catch (error) {
    res.status(500).json(error);
  }
});

//@desc    delete review
//@router  DELETE /api/review/:id
//@access  User
const deleteReview = asyncHandler(async (req: Request, res: Response) => {
  try {
    await Review.findByIdAndDelete(req.params.id);
    res.status(200).json("The comment has been deleted...!");
  } catch (error) {
    res.status(500).json(error);
  }
});

//@desc    count num review
//@router  GET /api/review/count
//@access  User
const countReview = asyncHandler(async (req: Request, res: Response) => {
  try {
    const countReview = await Review.countDocuments({ product: req.params.id });
    const countReviewHasImageOrVideo = await Review.find(
      { product: req.params.id },
      { video: 1, image: 1, _id: 0 }
    );
    let count = 0;
    countReviewHasImageOrVideo.forEach((item: any) => {
      if (item.image || item.video) {
        count++;
      }
    });
    const star5 = await Review.countDocuments({
      product: req.params.id,
      rating: 5,
    });
    const star4 = await Review.countDocuments({
      product: req.params.id,
      rating: 4,
    });
    const star3 = await Review.countDocuments({
      product: req.params.id,
      rating: 3,
    });
    const star2 = await Review.countDocuments({
      product: req.params.id,
      rating: 2,
    });
    const star1 = await Review.countDocuments({
      product: req.params.id,
      rating: 1,
    });
    const rateAvg = await Review.aggregate([
      {
        $match: { product: mongoose.Types.ObjectId(req.params.id) },
      },
      {
        $group: {
          _id: "$product",
          rateAvg: { $avg: "$rating" },
        },
      },
    ]);
    //console.log(rateAvg[0].rateAvg);

    res.status(200).json({
      review: countReview,
      star5: star5,
      star4: star4,
      star3: star3,
      star2: star2,
      star1: star1,
      reviewHasImageOrVideo: count,
      rateAvg: rateAvg[0].rateAvg,
    });
  } catch (error) {
    res.status(500).json(error);
  }
});

//@desc    filter by star
//@router  GET /api/review/filter
//@access  User
const filterByStar = asyncHandler(async (req: Request, res: Response) => {
  try {
    const filter = await Review.find({
      product: req.params.id,
      rating: req.query.rating,
    });
    res.status(200).json(filter);
  } catch (error) {
    res.status(500).json(error);
  }
});
const filterByImageOrVideo = asyncHandler(
  async (req: Request, res: Response) => {
    try {
      const checkExistImageOrVideo = await Review.find({
        product: req.params.id,
        $or: [{ image: { $exists: true } }, { video: { $exists: true } }],
      });
      res.status(200).json(checkExistImageOrVideo);
    } catch (error) {
      res.status(500).json(error);
    }
  }
);
export {
  postReview,
  updateReview,
  getReview,
  deleteReview,
  countReview,
  filterByStar,
  filterByImageOrVideo,
};
