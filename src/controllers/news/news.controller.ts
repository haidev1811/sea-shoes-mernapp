import { Request, Response } from "express";
const asyncHandler = require("express-async-handler");
const News = require("../../models/news/news.model");

//@desc    Add a news
//@router  POST /api/news/add
//@access  Staff, Admin
const addNews = asyncHandler(async (req: Request, res: Response) => {
  try {
    const author = req.body.author;
    const imgTitle = req.body.imgTitle;
    const title = req.body.title;
    const content = req.body.content;

    const news = new News({
      author,
      imgTitle,
      title,
      content,
    });

    const savedNews = await news.save();

    res.status(200).json({
      success: true,
      message: `News has been added successfully!`,
      news: savedNews,
    });
  } catch (error) {
    return res.status(400).json({
      error: "Your request could not be processed. Please try again.",
    });
  }
});

//@desc    Get list news
//@router  GET /api/news/list
//@access  User
const getListNews = asyncHandler(async (req: Request, res: Response) => {
  try {
    const news = await News.find({});

    res.status(200).json(news);
  } catch (error) {
    res.status(400).json({
      error: "Your request could not be processed. Please try again.",
    });
  }
});

//@desc    Get list news
//@router  GET /api/news
//@access  User
const getNewss = asyncHandler(async (req: Request, res: Response) => {
  const pageSize = 6;
  const page = Number(req.query.pageNumber) || 1;

  const count = await News.countDocuments({});
  const news = await News.find({})
    .limit(pageSize)
    .skip(pageSize * (page - 1));

  res.json({ news, page, pages: Math.ceil(count / pageSize) });
});

//@desc    Get news by slug
//@router  GET /api/news/item/:slug
//@access  User
const getNewsBySlug = asyncHandler(async (req: Request, res: Response) => {
  try {
    const slug = req.params.slug;

    const newsDoc = await News.findOne({ slug });

    if (!newsDoc) {
      return res.status(404).json({
        message: "No news found.",
      });
    }

    res.status(200).json(newsDoc);
  } catch (error) {
    res.status(400).json({
      error: "Your request could not be processed. Please try again.",
    });
  }
});

//@desc    Get news by id
//@router  GET /api/news/item/:id
//@access  User
const getNewsById = asyncHandler(async (req: Request, res: Response) => {
  try {
    const id = req.params.id;

    const newsDoc = await News.findOne({ _id: id });

    if (!newsDoc) {
      return res.status(404).json({
        message: "No news found.",
      });
    }

    res.status(200).json(newsDoc);
  } catch (error) {
    res.status(400).json({
      error: "Your request could not be processed. Please try again.",
    });
  }
});

//@desc    Delete news
//@router  DELETE /api/news/item/:id
//@access  Staff, Admin
const deleteNews = asyncHandler(async (req: Request, res: Response) => {
  try {
    const news = await News.deleteOne({ _id: req.params.id });

    res.status(200).json({
      success: true,
      message: `News has been deleted successfully!`,
      news,
    });
  } catch (error) {
    res.status(400).json({
      error: "Your request could not be processed. Please try again.",
    });
  }
});

//@desc    Update news
//@router  PUT /api/news/item/:id
//@access  Staff, Admin
const updateNews = asyncHandler(async (req: Request, res: Response) => {
  try {
    const newsId = req.params.id;
    const news = await News.findOne({ _id: newsId });
    const { author, imgTitle, title, content } = req.body;

    if (news) {
      news.author = author;
      news.imgTitle = imgTitle;
      news.title = title;
      news.content = content;

      const updateNews = await news.save();
      res.status(200).json({
        success: true,
        message: "Brand has been updated successfully!",
        updateNews,
      });
    }
  } catch (error) {
    res.status(400).json({
      error: "Your request could not be processed. Please try again.",
    });
  }
});

export {
  addNews,
  getListNews,
  getNewss,
  getNewsBySlug,
  getNewsById,
  updateNews,
  deleteNews,
};
