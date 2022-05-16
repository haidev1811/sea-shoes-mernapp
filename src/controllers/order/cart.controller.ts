import { Request, Response } from "express";
const asyncHandler = require("express-async-handler");
const Cart = require("../../models/order/cart.model");
const Product = require("../../models/product/product.model");

interface IUserReq extends Request {
  user?: any;
}

//@desc    get all cart item
//@router  GET /api/cart/:id
//@access  User
const getCart = asyncHandler(async (req: IUserReq, res: Response) => {
  try {
    const getCart = await Cart.find({ user: req.user.id });
    res.status(200).json(getCart);
  } catch (error) {
    res.status(500).json(error);
  }
});

//@desc    add product to cart
//@router  POST /api/cart/add
//@access  User
const addToCart = asyncHandler(async (req: IUserReq, res: Response) => {
  try {
    const user = req.user.id;
    const product = req.body.productId;
    const name = req.body.name;
    const image = req.body.image;
    const price = req.body.price;
    const discount = req.body.discount;
    const inStock = req.body.inStock;
    const quantity = req.body.quantity;
    const size = req.body.size;
    const colour = req.body.colour;

    const cart = new Cart({
      user,
      product,
      name,
      image,
      price,
      discount,
      inStock,
      quantity,
      size,
      colour,
    });

    const cartExits = await Cart.findOne({ product });
    if (cartExits) {
      cartExits.quantity = quantity + cartExits.quantity;
      await cartExits.save();
    } else {
      await cart.save();
    }

    if (cartExits) {
      res.status(200).json(cartExits);
    } else {
      res.status(200).json(cart);
    }
  } catch (error) {
    res.status(400).json({
      error: "Your request could not be processed. Please try again.",
    });
  }
});

//@desc    delete product in cart
//@router  DELETE /api/cart/delete/:id
//@access  User
const deleteInCart = asyncHandler(async (req: IUserReq, res: Response) => {
  try {
    const cart = await Cart.deleteOne({ _id: req.params.id });

    res.status(200).json({
      success: true,
      message: `Product has been deleted successfully!`,
    });
  } catch (error) {
    res.status(400).json({
      error: "Your request could not be processed. Please try again.",
    });
  }
});

//@desc    update cart item
//@router  PUT /api/cart/update/:id
//@access  User
const updateCart = asyncHandler(async (req: Request, res: Response) => {
  const cartItemId = { _id: req.params.id };
  const { quantity } = req.body;

  try {
    const data = await Cart.findByIdAndUpdate(
      cartItemId,
      { quantity },
      {
        new: true,
      }
    );
    res.status(200).json({
      success: true,
      message: `Product has been updated successfully!`,
    });
  } catch (error) {
    res.status(400).json({
      error: "Your request could not be processed. Please try again.",
    });
  }
});

export { addToCart, deleteInCart, updateCart, getCart };
