import { Request, Response } from "express";
const asyncHandler = require("express-async-handler");
const Address = require("../../models/auth/address.model");

interface IUserReq extends Request {
  user?: any;
}

//@desc    create address
//@router  POST /api/address/add
//@access  User
const createAddress = asyncHandler(async (req: IUserReq, res: Response) => {
  const user = req.user;

  const address = new Address(Object.assign(req.body, { user: user._id }));

  address.save((err, data) => {
    if (err) {
      return res.status(400).json({
        error: "Your request could not be processed. Please try again.",
      });
    }

    res.status(200).json({
      success: true,
      message: `Address has been added successfully!`,
      address: data,
    });
  });
});

//@desc    get all address
//@router  GET /api/address
//@access  User
const getAddress = asyncHandler(async (req: IUserReq, res: Response) => {
  Address.find({ user: req.user._id }, (err, data) => {
    if (err) {
      return res.status(400).json({
        error: "Your request could not be processed. Please try again.",
      });
    }

    res.status(200).json({
      addresses: data,
    });
  });
});

//@desc    get address by id
//@router  GET /api/address/:id
//@access  User
const getAddressById = asyncHandler(async (req: Request, res: Response) => {
  try {
    const addressId = req.params.id;

    const addressDoc = await Address.findOne({ _id: addressId });

    if (!addressDoc) {
      res.status(404).json({
        message: `Cannot find Address with the id: ${addressId}.`,
      });
    }

    res.status(200).json({
      address: addressDoc,
    });
  } catch (error) {
    res.status(400).json({
      error: "Your request could not be processed. Please try again.",
    });
  }
});

//@desc    update address
//@router  PUT /api/address/:id
//@access  User
const updateAddress = asyncHandler(async (req: Request, res: Response) => {
  try {
    const addressId = req.params.id;
    const update = req.body;
    const query = { _id: addressId };

    await Address.findOneAndUpdate(query, update, {
      new: true,
    });

    res.status(200).json({
      success: true,
      message: "Address has been updated successfully!",
    });
  } catch (error) {
    res.status(400).json({
      error: "Your request could not be processed. Please try again.",
    });
  }
});

//@desc    delete address
//@router  DELETE /api/address/:id
//@access  User
const deleteAddress = asyncHandler(async (req: Request, res: Response) => {
  Address.deleteOne({ _id: req.params.id }, (err, data) => {
    if (err) {
      return res.status(400).json({
        error: "Your request could not be processed. Please try again.",
      });
    }

    res.status(200).json({
      success: true,
      message: `Address has been deleted successfully!`,
      address: data,
    });
  });
});

export {
  createAddress,
  getAddress,
  deleteAddress,
  updateAddress,
  getAddressById,
};
