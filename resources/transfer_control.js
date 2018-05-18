/*
Paystack API - Transfer Control
*/

const route = "/transfer";

module.exports = {
  /*
  Check Balance
  */
  balance: {
    method: "get",
    route: "/balance"
  },

  /*
  Resend OTP
  */
  resendOTP: {
    method: "post",
    route: `${route}/resend_otp`,
    params: ["transfer_code*", "reason*"]
  },

  /*
  Disable OTP
  */
  disableOTP: {
    method: "post",
    route: `${route}/disable_otp`
  },

  /*
  Finalize Disabling of OTP
  */
  finalizeDisableOTP: {
    method: "post",
    route: `${route}/disable_otp_finalize`,
    params: ["otp*"]
  },

  /*
  Enable OTP
  */
  enableOTP: {
    method: "post",
    route: `${route}/enable_otp`
  }
};
