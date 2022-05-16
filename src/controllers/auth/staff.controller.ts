import { Request, Response } from "express";
const asyncHandler = require("express-async-handler");
const bcrypt = require("bcryptjs");
const crypto = require("crypto");
const Staff = require("../../models/auth/staff.model");
const User = require("../../models/auth/user.model");
const Brand = require("../../models/product/brand.model");
const mailgun = require("../../services/mailgun");

//@desc    staff request
//@router  POST /api/staff/staff-request
//@access  User
const staffRequest = asyncHandler(async (req: Request, res: Response) => {
  try {
    const name = req.body.name;
    const phoneNumber = req.body.phoneNumber;
    const email = req.body.email;

    if (!name || !email) {
      return res
        .status(400)
        .json({ error: "You must enter your name and email." });
    }

    if (!phoneNumber || !email) {
      return res
        .status(400)
        .json({ error: "You must enter a phone number and an email address." });
    }

    const existingMerchant = await Staff.findOne({ email });

    if (existingMerchant) {
      return res
        .status(400)
        .json({ error: "That email address is already in use." });
    }

    const staff = new Staff({
      name,
      email,
      phoneNumber,
    });

    const staffDoc = await staff.save();

    await mailgun.sendEmail(email, "merchant-application");

    res.status(200).json({
      success: true,
      message: `We received your request! we will reach you on your phone number ${phoneNumber}!`,
      staff: staffDoc,
    });
  } catch (error) {
    return res.status(400).json({
      error: "Your request could not be processed. Please try again.",
    });
  }
});

//@desc    get all staff
//@router  GET /api/staff/list
//@access  Admin
const getListStaff = asyncHandler(async (req: Request, res: Response) => {
  try {
    const staffs = await Staff.find({}).sort("-created_at");

    res.status(200).json({
      staffs,
    });
  } catch (error) {
    res.status(400).json({
      error: "Your request could not be processed. Please try again.",
    });
  }
});

//@desc    approve staff
//@router  PUT /api/staff/approve/:staffId
//@access
const approveStaff = asyncHandler(async (req: Request, res: Response) => {
  try {
    const staffId = req.params.staffId;

    const query = { _id: staffId };
    const update = {
      status: "Approved",
    };

    const staffDoc = await Staff.findOneAndUpdate(query, update, {
      new: true,
    });

    await createStaffUser(
      staffDoc.email,
      staffDoc.name,
      staffId,
      req.headers.host
    );

    res.status(200).json({
      success: true,
    });
  } catch (error) {
    res.status(400).json({
      error: "Your request could not be processed. Please try again.",
    });
  }
});

//@desc    reject staff
//@router  PUT /api/staff/reject/:staffId
//@access
const rejectStaff = asyncHandler(async (req: Request, res: Response) => {
  try {
    const staffId = req.params.staffId;

    const query = { _id: staffId };
    const update = {
      status: "Rejected",
    };

    await Staff.findOneAndUpdate(query, update, {
      new: true,
    });

    res.status(200).json({
      success: true,
    });
  } catch (error) {
    res.status(400).json({
      error: "Your request could not be processed. Please try again.",
    });
  }
});

const createMerchantBrand = async ({ _id, brand }) => {
  const newBrand = new Brand({
    name: brand,
    staff: _id,
  });

  return await newBrand.save();
};

//@desc    sign up staff
//@router  POST /api/staff/signup/:token
//@access
const signupStaff = asyncHandler(async (req: Request, res: Response) => {
  try {
    const { email, firstName, lastName, password } = req.body;

    if (!email) {
      return res
        .status(400)
        .json({ error: "You must enter an email address." });
    }

    if (!firstName || !lastName) {
      return res.status(400).json({ error: "You must enter your full name." });
    }

    if (!password) {
      return res.status(400).json({ error: "You must enter a password." });
    }

    const userDoc = await User.findOne({
      email,
      resetPasswordToken: req.params.token,
    });

    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);

    const query = { _id: userDoc._id };
    const update = {
      email,
      firstName,
      lastName,
      password: hash,
      resetPasswordToken: undefined,
    };

    await User.findOneAndUpdate(query, update, {
      new: true,
    });

    const merchantDoc = await Staff.findOne({
      email,
    });

    await createMerchantBrand(merchantDoc);

    res.status(200).json({
      success: true,
    });
  } catch (error) {
    res.status(400).json({
      error: "Your request could not be processed. Please try again.",
    });
  }
});

//@desc    delete staff
//@router  DELETE /api/staff/:id
//@access  Admin
const deleteStaff = asyncHandler(async (req: Request, res: Response) => {
  try {
    const staff = await Staff.deleteOne({ _id: req.params.id });

    res.status(200).json({
      success: true,
      message: `Staff has been deleted successfully!`,
      staff,
    });
  } catch (error) {
    res.status(400).json({
      error: "Your request could not be processed. Please try again.",
    });
  }
});

const createStaffUser = async (email, name, staff, host) => {
  const firstName = name;
  const lastName = "";

  const existingUser = await User.findOne({ email });

  if (existingUser) {
    const query = { _id: existingUser._id };
    const update = {
      staff,
      role: "staff",
    };

    const staffDoc = await Staff.findOne({
      email,
    });

    await createMerchantBrand(staffDoc);

    await mailgun.sendEmail(email, "staff-welcome", null, name);

    return await User.findOneAndUpdate(query, update, {
      new: true,
    });
  } else {
    const buffer = await crypto.randomBytes(48);
    const resetToken = buffer.toString("hex");
    const resetPasswordToken = resetToken;

    const user = new User({
      email,
      firstName,
      lastName,
      resetPasswordToken,
      staff,
      role: "staff",
    });

    await mailgun.sendEmail(email, "staff-signup", host, {
      resetToken,
      email,
    });

    return await user.save();
  }
};

export {
  staffRequest,
  getListStaff,
  approveStaff,
  rejectStaff,
  signupStaff,
  deleteStaff,
};
