import { Request, Response } from "express";
const asyncHandler = require("express-async-handler");
const Category = require("../../models/product/category.model");

//@desc    Create new category
//@router  POST /api/category/add
//@access  Admin
const createNewCategory = asyncHandler(async (req: Request, res: Response) => {
  const name = req.body.name;

  if (!name) {
    return res.status(400).json({ error: "You must enter name." });
  }

  const category = new Category({
    name,
  });

  category.save((err, data) => {
    if (err) {
      return res.status(400).json({
        error: "Your request could not be processed. Please try again.",
      });
    }

    res.status(200).json({
      success: true,
      message: `Category has been added successfully!`,
      category: data,
    });
  });
});

//@desc    get list category by user
//@router  GET /api/category/list
//@access  User
const getCategory = asyncHandler(async (req: Request, res: Response) => {
  try {
    const categories = await Category.find({}).populate("name");

    res.status(200).json(categories);
  } catch (error) {
    res.status(400).json({
      error: "Your request could not be processed. Please try again.",
    });
  }
});

//@desc    get list category
//@router  GET /api/category
//@access  Admin
const getListCategory = asyncHandler(async (req: Request, res: Response) => {
  try {
    const categories = await Category.find({});
    res.status(200).json(categories);
  } catch (error) {
    res.status(400).json({
      error: "Your request could not be processed. Please try again.",
    });
  }
});

//@desc    get category by id
//@router  GET /api/category/:id
//@access  Staff, User
const getCategoryById = asyncHandler(async (req: Request, res: Response) => {
  try {
    const categoryId = req.params.id;

    const categoryDoc = await Category.findOne({ _id: categoryId });

    if (!categoryDoc) {
      res.status(404).json({
        message: `Cannot find category with id: ${categoryId}.`,
      });
    }

    res.status(200).json(categoryDoc);
  } catch (error) {
    res.status(400).json({
      error: "Your request could not be processed. Please try again.",
    });
  }
});

//@desc    update category
//@router  PUT /api/category/:id
//@access  Admin
const updateCategory = asyncHandler(async (req: Request, res: Response) => {
  try {
    const categoryId = req.params.id;

    const category = await Category.findOne({ _id: categoryId });
    const { name } = req.body;

    if (category) {
      category.name = name;

      const updateCategory = await category.save();
      res.status(200).json({
        success: true,
        message: "Brand has been updated successfully!",
      });
    }
  } catch (error) {
    res.status(400).json({
      error: "Your request could not be processed. Please try again.",
    });
  }
});

//@desc    delete category
//@router  DELETE /api/category/:id
//@access  Admin
const deleteCategory = asyncHandler(async (req: Request, res: Response) => {
  try {
    const product = await Category.deleteOne({ _id: req.params.id });

    res.status(200).json({
      success: true,
      message: `Category has been deleted successfully!`,
      product,
    });
  } catch (error) {
    res.status(400).json({
      error: "Your request could not be processed. Please try again.",
    });
  }
});

export {
  createNewCategory,
  getCategory,
  getListCategory,
  getCategoryById,
  updateCategory,
  deleteCategory,
};
