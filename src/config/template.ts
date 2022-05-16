exports.resetEmail = (host, resetToken) => {
  const message = {
    subject: "Reset Password",
    text:
      `${
        "You are receiving this because you have requested to reset your password for your account.\n\n" +
        "Please click on the following link, or paste this into your browser to complete the process:\n\n" +
        "http://"
      }${host}/reset-password/${resetToken}\n\n` +
      `If you did not request this, please ignore this email and your password will remain unchanged.\n`,
  };

  return message;
};

exports.confirmResetPasswordEmail = () => {
  const message = {
    subject: "Password Changed",
    text:
      `You are receiving this email because you changed your password. \n\n` +
      `If you did not request this change, please contact us immediately.`,
  };

  return message;
};

exports.contactEmail = () => {
  const message = {
    subject: "Liên hệ với chúng tôi",
    text: `Chúng tôi đã nhận được tin nhắn của. Đội ngũ của chúng tôi sẽ sớm liên hệ lại với bạn. \n\n`,
  };

  return message;
};

exports.orderConfirmationEmail = (order) => {
  const message = {
    subject: `Xác nhận đơn hàng ${order._id}`,
    text:
      `Xin chào ${order.fullname}! Cảm ơn vì bạn đã đặt hàng!. \n\n` +
      `Chúng tôi đã nhận được đơn hàng của bạn và sẽ liên hệ với bạn ngay khi đơn hàng được chuyển đi. \n\n`,
  };

  return message;
};
