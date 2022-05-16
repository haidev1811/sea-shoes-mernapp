import express, { Request, Response } from "express";
import path from "path";
import multer from "multer";
const router = express.Router();
const cloudinary = require("../../config/cloudinary");

interface IFileReq extends Request {
  file?: any;
}

const storage = multer.diskStorage({
  filename(req, file, cb) {
    cb(
      null,
      `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`
    );
  },
});

function checkFileType(file, cb) {
  const filetypes = /jpg|jpeg|png|mp4/;
  const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
  const mimetype = filetypes.test(file.mimetype);

  if (extname && mimetype) {
    return cb(null, true);
  } else {
    cb("Images only!");
  }
}

const upload = multer({
  storage,
  fileFilter: function (req, file, cb) {
    checkFileType(file, cb);
  },
});

router.post(
  "/",
  upload.single("image"),
  async (req: IFileReq, res: Response) => {
    try {
      // Upload image to cloudinary
      const result = await cloudinary.uploader.upload(req.file.path);

      const imageResult = {
        url: result.secure_url,
        cloudinary_id: result.public_id,
      };

      res.json(imageResult);
    } catch (err) {
      console.log(err);
    }
  }
);

module.exports = router;
