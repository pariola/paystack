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
    route: '/balance'
  },

  /*
  Resend OTP
  */
  resendOtp: {
    method: "post",
    route: route,
    args: ["transfer_code*", "reason*"]
  },

  // Disabling or Enabling of OTP: Later
};
