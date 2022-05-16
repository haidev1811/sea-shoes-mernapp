const Mailgun = require("mailgun-js");

const template = require("../config/template");
const key = process.env.MAILGUN_KEY;
const domain = process.env.MAILGUN_DOMAIN;
const sender = process.env.MAILGUN_EMAIL_SENDER;

class MailgunService {
  init() {
    try {
      return new Mailgun({
        apiKey: key,
        domain: domain,
      });
    } catch (error) {
      console.warn("Missing mailgun keys");
    }
  }
}

const mailgun = new MailgunService().init();

exports.sendEmail = async (email, type, host, data) => {
  try {
    const message = prepareTemplate(type, host, data);

    const config = {
      from: `Sea Shoes Store! <${sender}>`,
      to: email,
      subject: message.subject,
      text: message.text,
    };

    return await mailgun.messages().send(config);
  } catch (error) {
    return error;
  }
};

const prepareTemplate = (type, host, data) => {
  let message;

  switch (type) {
    case "reset":
      message = template.resetEmail(host, data);
      break;

    case "reset-confirmation":
      message = template.confirmResetPasswordEmail();
      break;

    case "contact":
      message = template.contactEmail();
      break;

    case "order-confirmation":
      message = template.orderConfirmationEmail(data);
      break;

    default:
      message = "";
  }

  return message;
};
