import { Request, Response } from "express";
const asyncHandler = require("express-async-handler");
const Brand = require("../../models/product/brand.model");

interface IUserReq extends Request {
  user?: any;
}

//@desc    create a new brand
//@router  POST /api/brand/add
//@access  Staff, Admin
const createBrand = asyncHandler(async (req: Request, res: Response) => {
  try {
    const name = req.body.name;
    const image = req.body.image;

    if (!name) {
      return res.status(400).json({ error: "You must enter name." });
    }

    const brand = new Brand({
      name,
      image,
    });

    const brandDoc = await brand.save();

    res.status(200).json({
      success: true,
      message: `Brand has been added successfully!`,
      brand: brandDoc,
    });
  } catch (error) {
    res.status(400).json({
      error: "Your request could not be processed. Please try again.",
    });
  }
});

//@desc    get list brand by user
//@router  GET /api/brand/list
//@access  User
const getBrand = asyncHandler(async (req: Request, res: Response) => {
  try {
    const brands = await Brand.find({}).populate("name");

    res.status(200).json(brands);
  } catch (error) {
    res.status(400).json({
      error: "Your request could not be processed. Please try again.",
    });
  }
});

//@desc    get list brand
//@router  GET /api/brand
//@access  Staff, Admin
const getListBrand = asyncHandler(async (req: IUserReq, res: Response) => {
  try {
    const brands = await Brand.find({}).populate("name");

    res.status(200).json(brands);
  } catch (error) {
    res.status(400).json({
      error: "Your request could not be processed. Please try again.",
    });
  }
});

//@desc    get brand by id
//@router  GET /api/brand/:id
//@access  Staff, User
const getBrandById = asyncHandler(async (req: Request, res: Response) => {
  try {
    const brandId = req.params.id;

    const brandDoc = await Brand.findOne({ _id: brandId });

    if (!brandDoc) {
      res.status(404).json({
        message: `Cannot find brand with id: ${brandId}.`,
      });
    }

    res.status(200).json(brandDoc);
  } catch (error) {
    res.status(400).json({
      error: "Your request could not be processed. Please try again.",
    });
  }
});

//@desc    update brand
//@router  PUT /api/brand/:id
//@access  User
const updateBrand = asyncHandler(async (req: Request, res: Response) => {
  try {
    const brandId = req.params.id;

    const brand = await Brand.findOne({ _id: brandId });
    const { name, image } = req.body;

    if (brand) {
      brand.name = name;
      brand.image = image;

      const updateBrand = await brand.save();
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

//@desc    Delete brand
//@router  DELETE /api/brand/:id
//@access  Staff, Admin
const deleteBrand = asyncHandler(async (req: Request, res: Response) => {
  try {
    const brand = await Brand.deleteOne({ _id: req.params.id });

    res.status(200).json({
      success: true,
      message: `Brand has been deleted successfully!`,
      brand,
    });
  } catch (error) {
    res.status(400).json({
      error: "Your request could not be processed. Please try again.",
    });
  }
});

export {
  createBrand,
  getBrand,
  getListBrand,
  getBrandById,
  updateBrand,
  deleteBrand,
};
