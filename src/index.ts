import express, { Application, Request, Response } from "express";
const dotenv = require("dotenv");
dotenv.config();
const connectDB = require("./config/db");
const cors = require("cors");
var colors = require("colors");

const userRoutes = require("./routes/auth/user.route");
const authRoutes = require("./routes/auth/auth.route");
const addressRoutes = require("./routes/auth/address.route");
const staffRoutes = require("./routes/auth/staff.route");
const contactRoutes = require("./routes/auth/contact.route");
const productRoutes = require("./routes/product/product.route");
const brandRoutes = require("./routes/product/brand.route");
const categoryRoutes = require("./routes/product/category.route");
const reviewRoutes = require("./routes/product/review.route");
const wishlistRoutes = require("./routes/product/wishlist.route");
const cartRoutes = require("./routes/order/cart.route");
const orderRoutes = require("./routes/order/order.route");
const newsRoutes = require("./routes/news/news.route");
const commentRoutes = require("./routes/news/comment.route");
const uploadRoutes = require("./routes/upload/upload.route");

const app: Application = express();

connectDB();

//Middleware
app.use(express.json()); // Configure Express to parse incoming JSON data

app.use(cors());

app.use("/api/user", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/address", addressRoutes);
app.use("/api/staff", staffRoutes);
app.use("/api/contact", contactRoutes);
app.use("/api/product", productRoutes);
app.use("/api/brand", brandRoutes);
app.use("/api/category", categoryRoutes);
app.use("/api/review", reviewRoutes);
app.use("/api/wishlist", wishlistRoutes);
app.use("/api/cart", cartRoutes);
app.use("/api/order", orderRoutes);
app.use("/api/news", newsRoutes);
app.use("/api/comment", commentRoutes);
app.use("/api/upload", uploadRoutes);

//config paypal
app.get("/api/config/paypal", (req: Request, res: Response) => {
  res.send(process.env.PAYPAL_CLIENT_ID);
});
app.get("/", (req: Request, res: Response) => {
  res.send("APP IS RUNNING");
});

const port = process.env.PORT || 5000;

app.listen(port, () =>
  console.log(colors.yellow(`Server running on port ${port}`))
);
