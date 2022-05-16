import { Request, Response } from "express";
const asyncHandler = require("express-async-handler");
const mongoose = require("mongoose");
const Product = require("../../models/product/product.model");
const Brand = require("../../models/product/brand.model");
const Category = require("../../models/product/category.model");
const checkAuth = require("../../helpers/auth");

//@desc    Create a new product
//@router  POST /api/product
//@access  Staff, Admin
const createProduct = asyncHandler(async (req: Request, res: Response) => {
  try {
    const name = req.body.name;
    const image1 = req.body.image1;
    const image2 = req.body.image2;
    const image3 = req.body.image3;
    const image4 = req.body.image4;
    const image5 = req.body.image5;
    const inStock = req.body.inStock;
    const price = req.body.price;
    const discount = req.body.discount;
    const description = req.body.description;
    const brand = req.body.brand;
    const category = req.body.category;
    const type = req.body.type;
    const size = req.body.size;
    const colour = req.body.colour;

    if (!description || !name) {
      return res
        .status(400)
        .json({ error: "You must enter description & name." });
    }

    if (!price) {
      return res.status(400).json({ error: "You must enter a price." });
    }

    const product = new Product({
      name,
      image1,
      image2,
      image3,
      image4,
      image5,
      inStock,
      price,
      discount,
      description,
      brand,
      category,
      type,
      size,
      colour,
    });

    const savedProduct = await product.save();

    res.status(200).json({
      success: true,
      message: `Product has been added successfully!`,
      product: savedProduct,
    });
  } catch (error) {
    return res.status(400).json({
      error: "Your request could not be processed. Please try again.",
    });
  }
});

//@desc    Get list product
//@router  GET /api/product/list
//@access  User
const getProduct = asyncHandler(async (req: Request, res: Response) => {
  try {
    const products = await Product.find({});

    res.status(200).json(products);
  } catch (error) {
    res.status(400).json({
      error: "Your request could not be processed. Please try again.",
    });
  }
});

//@desc    Get product by id
//@router  GET /api/product/:id
//@access  User
const getProductById = asyncHandler(async (req: Request, res: Response) => {
  try {
    const id = req.params.id;

    const product = await Product.findOne({ _id: id }).populate({
      path: "brand",
      select: "name slug",
    });

    if (!product) {
      return res.status(404).json({
        message: "No product found.",
      });
    }

    res.status(200).json(product);
  } catch (error) {
    res.status(400).json({
      error: "Your request could not be processed. Please try again.",
    });
  }
});

//@desc    Get product by slug
//@router  GET /api/product/item/:slug
//@access  User
const getProductBySlug = asyncHandler(async (req: Request, res: Response) => {
  try {
    const slug = req.params.slug;

    const product = await Product.findOne({ slug }).populate({
      path: "brand",
      select: "name slug",
    });

    if (!product || (product && product?.brand === false)) {
      return res.status(404).json({
        message: "No product found.",
      });
    }

    res.status(200).json(product);
  } catch (error) {
    res.status(400).json({
      error: "Your request could not be processed. Please try again.",
    });
  }
});

//@desc    Delete product
//@router  DELETE /api/product/item/:id
//@access  Staff, Admin
const deleteProduct = asyncHandler(async (req: Request, res: Response) => {
  try {
    const product = await Product.deleteOne({ _id: req.params.id });

    res.status(200).json({
      success: true,
      message: `Product has been deleted successfully!`,
      product,
    });
  } catch (error) {
    res.status(400).json({
      error: "Your request could not be processed. Please try again.",
    });
  }
});

//@desc    Update product
//@router  PUT /api/product/item/:id
//@access  Staff, Admin
const updateProduct = asyncHandler(async (req: Request, res: Response) => {
  try {
    const productId = req.params.id;
    const product = await Product.findOne({ _id: productId });
    const {
      name,
      image1,
      image2,
      image3,
      image4,
      image5,
      price,
      inStock,
      discount,
      description,
      size,
      colour,
      brand,
      category,
      type,
    } = req.body;

    if (product) {
      product.name = name;
      product.image1 = image1;
      product.image2 = image2;
      product.image3 = image3;
      product.image4 = image4;
      product.image5 = image5;
      product.price = price;
      product.inStock = inStock;
      product.discount = discount;
      product.description = description;
      product.size = size;
      product.colour = colour;
      product.brand = brand;
      product.category = category;
      product.type = type;

      const updateProduct = await product.save();
      res.status(200).json({
        success: true,
        message: "Product has been updated successfully!",
        updateProduct,
      });
    }
  } catch (error) {
    res.status(400).json({
      error: "Your request could not be processed. Please try again.",
    });
  }
});

//@desc    Search product by name
//@router  GET /api/product/search/:name
//@access  User
const searchProductByName = asyncHandler(
  async (req: Request, res: Response) => {
    try {
      const name = req.params.name;

      const productDoc = await Product.find({
        name: { $regex: new RegExp(name), $options: "is" },
      });

      if (productDoc.length < 0) {
        return res.status(404).json({
          message: "No product found.",
        });
      }

      res.status(200).json({
        products: productDoc,
      });
    } catch (error) {
      res.status(400).json({
        error: "Your request could not be processed. Please try again.",
      });
    }
  }
);

//@desc    get list product by filter
//@router  GET /api/product/list
//@access  User
const getProductsByFilter = asyncHandler(
  async (req: Request, res: Response) => {
    const pageSize = 12;
    const page = Number(req.query.pageNumber) || 1;
    const category = req.query.category || "";
    const brand = req.query.brand || "";
    const type = req.query.type || "";
    const colour = req.query.colour || "";
    const size = req.query.size || "";
    let sort = Number(req.query.sort) || 0;

    const sortFilter = (sort: any) => {
      switch (sort) {
        case 0:
          return {
            sold: -1,
          };
        case 1:
          return {
            name: 1,
          };
        case 2:
          return {
            name: -1,
          };
        case 3:
          return {
            createdAt: 1,
          };
        case 4:
          return {
            createdAt: -1,
          };
        case 5:
          return {
            price: 1,
          };
        case 6:
          return {
            price: -1,
          };
        default:
          return {};
      }
    };

    let sortOrder = sortFilter(sort);

    const categoryFilter = category ? { category } : {};
    const brandFilter = brand ? { brand } : {};
    const typeFilter = type ? { type } : {};
    const colourFilter = colour ? { colour } : {};
    const sizeFilter = size ? { size } : {};
    const sortFilters = sort ? sortOrder : {};

    const count = await Product.countDocuments({
      ...categoryFilter,
      ...brandFilter,
      ...typeFilter,
      ...colourFilter,
      ...sizeFilter,
    });
    const products = await Product.find({
      ...categoryFilter,
      ...brandFilter,
      ...typeFilter,
      ...colourFilter,
      ...sizeFilter,
    })
      .sort(sortFilters)
      .skip(pageSize * (page - 1))
      .limit(pageSize);

    res.json({ products, page, pages: Math.ceil(count / pageSize) });
  }
);

//@desc    get list product by brand
//@router  GET /api/product/brand/:id
//@access  User
const getProductsByBrand = asyncHandler(async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const brand = await Brand.findOne({ _id: id });

    if (!brand) {
      return res.status(404).json({
        message: `Cannot find brand width with the id: ${id}`,
      });
    }

    let type = req.query.type || "";
    let pageNumber = Number(req.query.pageNumber) || 1;
    let sortOrder = Number(req.query.sortOrder) || 0;

    const pageSize = 8;
    const typeFilter = type ? { type } : {};

    const sortFilter = (sortOrder: any) => {
      switch (sortOrder) {
        case 0:
          return {
            name: 1,
          };
        case 1:
          return {
            createdAt: -1,
          };
        case 2:
          return {
            sold: -1,
          };
        case 3:
          return {
            price: 1,
          };
        case 4:
          return {
            price: -1,
          };
        default:
          return {};
      }
    };

    let sort = sortFilter(sortOrder);

    const basicQuery: any = [
      {
        $match: {
          brand: brand._id,
        },
      },
      {
        $lookup: {
          from: "brands",
          localField: "brand",
          foreignField: "_id",
          as: "brands",
        },
      },
      {
        $unwind: {
          path: "$brands",
          preserveNullAndEmptyArrays: true,
        },
      },
      {
        $addFields: {
          "brand.name": "$brands.name",
          "brand._id": "$brands._id",
        },
      },
      { $project: { brand: 0 } },
    ];

    const userDoc = await checkAuth(req);
    let products = null;
    let productsCount: any = 0;

    if (userDoc) {
      productsCount = await Product.aggregate(
        [
          {
            $lookup: {
              from: "wishlists",
              let: { product: "$_id" },
              pipeline: [
                {
                  $match: {
                    $and: [
                      { $expr: { $eq: ["$$product", "$product"] } },
                      { user: new mongoose.Types.ObjectId(userDoc.id) },
                    ],
                  },
                },
              ],
              as: "isLiked",
            },
          },
          {
            $addFields: {
              isLiked: { $arrayElemAt: ["$isLiked.isLiked", 0] },
            },
          },
        ].concat(basicQuery)
      );
      const paginateQuery: any = [
        {
          $sort: sort,
        },
        {
          $skip: pageSize * (productsCount.length > 8 ? pageNumber - 1 : 0),
        },
        { $limit: pageSize },
      ];
      products = await Product.aggregate(
        [
          {
            $lookup: {
              from: "wishlists",
              let: { product: "$_id" },
              pipeline: [
                {
                  $match: {
                    $and: [
                      { $expr: { $eq: ["$$product", "$product"] } },
                      { user: new mongoose.Types.ObjectId(userDoc.id) },
                    ],
                  },
                },
              ],
              as: "isLiked",
            },
          },
          {
            $addFields: {
              isLiked: { $arrayElemAt: ["$isLiked.isLiked", 0] },
            },
          },
        ]
          .concat(basicQuery)
          .concat(paginateQuery)
      );
    } else {
      productsCount = await Product.aggregate(basicQuery);
      const paginateQuery = [
        {
          $sort: sort,
        },
        {
          $skip: pageSize * (productsCount.length > 8 ? pageNumber - 1 : 0),
        },
        { $limit: pageSize },
      ];
      products = await Product.aggregate(basicQuery.concat(paginateQuery));
    }

    res.status(200).json({
      products,
      pageNumber,
      pages:
        productsCount.length > 0
          ? Math.ceil(productsCount.length / pageSize)
          : 0,
      totalProducts: productsCount.length,
    });
  } catch (error) {
    res.status(500).json({ message: `error: ${error}` });
  }
});

export {
  createProduct,
  getProduct,
  getProductById,
  getProductBySlug,
  deleteProduct,
  updateProduct,
  searchProductByName,
  getProductsByFilter,
  getProductsByBrand,
};
