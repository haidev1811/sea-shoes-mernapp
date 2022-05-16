import { Request, Response } from "express";
const asyncHandler = require("express-async-handler");
const mailgun = require("../../services/mailgun");
const Contact = require("../../models/auth/contact.model");

//@desc    New contact
//@router  POST /api/contact/add
//@access  User
const newContact = asyncHandler(async (req: Request, res: Response) => {
  try {
    const phoneNumber = req.body.phoneNumber;
    const email = req.body.email;
    const message = req.body.message;

    if (!email) {
      return res
        .status(400)
        .json({ error: "You must enter an email address." });
    }

    if (!message) {
      return res.status(400).json({ error: "You must enter a message." });
    }

    const contact = new Contact({
      phoneNumber,
      email,
      message,
    });

    const contactDoc = await contact.save();

    await mailgun.sendEmail(contactDoc.email, "contact");

    res.status(200).json({
      success: true,
      message: `Your contact has been placed successfully!`,
    });
  } catch (error) {
    res.status(400).json({
      error: "Your request could not be processed. Please try again.",
    });
  }
});

export { newContact };
