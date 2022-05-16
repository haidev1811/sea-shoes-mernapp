import { Request, Response } from "express";
const asyncHandler = require("express-async-handler");
const Order = require("../../models/order/order.model");
const Cart = require("../../models/order/cart.model");
const Product = require("../../models/product/product.model");
const mailgun = require("../../services/mailgun");

interface IUserReq extends Request {
  user?: any;
}

//@desc    create new order
//@router  POST /api/order/add
//@access  User
const createNewOrder = asyncHandler(async (req: IUserReq, res: Response) => {
  try {
    const user = req.user.id;
    const orderItems = req.body.orderItems;
    const totalPrice = req.body.totalPrice;
    const fullname = req.body.fullname;
    const email = req.body.email;
    const phoneNumber = req.body.phoneNumber;
    const shippingAddress = req.body.shippingAddress;
    const shippingPrice = req.body.shippingPrice;
    const paymentStatus = req.body.paymentStatus;

    if (orderItems && orderItems.length === 0) {
      res.status(400).json({
        success: false,
        message: `No orders items`,
      });
    } else {
      const order = new Order({
        user,
        orderItems,
        fullname,
        email,
        phoneNumber,
        totalPrice,
        shippingAddress,
        shippingPrice,
        paymentStatus,
      });

      const orderDoc = await order.save();

      orderDoc.orderItems.map(async (item: any) => {
        await Product.findByIdAndUpdate(item.product, {
          $inc: { sold: item.quantity },
        });
      });

      const newOrder = {
        _id: orderDoc._id,
        user: orderDoc.user,
        fullname: orderDoc.fullname,
        email: orderDoc.email,
        products: orderDoc.orderItems,
        address: orderDoc.shippingAddress,
        ship: orderDoc.shippingAddress,
        total: orderDoc.shippingPrice,
        paymentStatus: orderDoc.paymentStatus,
        createdAt: orderDoc.createdAt,
      };

      await mailgun.sendEmail(
        orderDoc.email,
        "order-confirmation",
        null,
        newOrder
      );

      res.status(200).json({
        success: true,
        message: `Your order has been placed successfully!`,
      });
    }
  } catch (error) {
    res.status(400).json({
      error: "Your request could not be processed. Please try again.",
    });
  }
});

//@desc    get list order
//@router  GET /api/order
//@access  Admin, Staff
const getListOrder = asyncHandler(async (req: IUserReq, res: Response) => {
  try {
    const orders = await Order.find({});

    res.json(orders);
  } catch (error) {
    res.status(400).json({
      error: "Your request could not be processed. Please try again.",
    });
  }
});

//@desc    get detail order
//@router  GET /api/order/:id
//@access  User
const getDetailOrder = asyncHandler(async (req: IUserReq, res: Response) => {
  try {
    const order = await Order.findById(req.params.id);

    if (order) {
      res.json(order);
    } else {
      res.status(404);
      throw new Error("Order not found");
    }
  } catch (error) {
    res.status(400).json({
      error: "Your request could not be processed. Please try again.",
    });
  }
});

//@desc    Get logged in user orders
//@router  GET /api/orders/myorder
//@access  Private
const getMyOrders = asyncHandler(async (req: IUserReq, res: Response) => {
  try {
    const orders = await Order.find({ user: req.user._id });

    res.json(orders);
  } catch (error) {
    res.status(400).json({
      error: "Your request could not be processed. Please try again.",
    });
  }
});

//@desc    cancel order
//@router  DELETE /api/order/:id
//@access  User
const cancelOrder = asyncHandler(async (req: IUserReq, res: Response) => {
  try {
    const orderId = req.params.id;

    await Cart.deleteOne({ _id: orderId });

    res.status(200).json({
      success: true,
    });
  } catch (error) {
    res.status(400).json({
      error: "Your request could not be processed. Please try again.",
    });
  }
});

//@desc    update status order
//@router  PUT /api/order/status/:id
//@access  User
const updateStatusOrder = asyncHandler(async (req: IUserReq, res: Response) => {
  try {
    const orderId = req.params.id;
    const order = await Order.findOne({ _id: orderId });
    const { paymentStatus, deliveryStatus } = req.body;

    if (order) {
      order.paymentStatus = paymentStatus;
      order.deliveryStatus = deliveryStatus;

      const updateOrder = await order.save();
      res.status(200).json({
        success: true,
        message: "Order has been updated successfully!",
        updateOrder,
      });
    }
  } catch (error) {
    res.status(400).json({
      error: "Your request could not be processed. Please try again.",
    });
  }
});

const increaseQuantity = (products) => {
  let bulkOptions = products.map((item) => {
    return {
      updateOne: {
        filter: { _id: item.product },
        update: { $inc: { quantity: item.quantity } },
      },
    };
  });

  Product.bulkWrite(bulkOptions);
};

export {
  createNewOrder,
  getListOrder,
  getDetailOrder,
  getMyOrders,
  cancelOrder,
  updateStatusOrder,
};
