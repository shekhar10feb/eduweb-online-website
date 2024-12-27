const axios = require("axios");
const twilio = require("twilio");

const forgotPasswordVerification = async (otp, user_mobile_number) => {
  try {
    const twilioClient = twilio(
      process.env.TWILIO_ACCOUNT_SID,
      process.env.TWILIO_AUTH_TOKEN
    );
    const message = await twilioClient.messages.create({
      body: `Your OTP is: ${otp}`,
      from: process.env.TWILIO_PHONE_NUMBER,
      to: user_mobile_number,
    });
    return;
  } catch (error) {
    console.log(error.message);
  }
};
module.exports = { forgotPasswordVerification };
