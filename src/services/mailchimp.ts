import Mailchimp from "mailchimp-api-v3";

const key = process.env.MAILCHIMP_KEY;
const listKey = process.env.MAILCHIMP_LIST_KEY;

class MailchimpService {
  init() {
    try {
      return new Mailchimp(key);
    } catch (error) {
      console.warn("Missing mailgun keys");
    }
  }
}

const mailchimp = new MailchimpService().init();

exports.subcribeToNewsletter = async (email) => {
  try {
    return await mailchimp.post(`list/${listKey}/members`, {
      email_address: email,
      status: "subcribed",
    });
  } catch (error) {
    return error;
  }
};
