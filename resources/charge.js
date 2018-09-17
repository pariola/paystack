/*
Paystack API - Charge
*/

const route = "/charge";

module.exports = {
  /*
  Tokenize
  */
  tokenize: {
    method: "post",
    route: `${route}/tokenize`,
    params: ["email*", "card*"]
  },

  /*
 Charge
  */
  charge: {
    method: "post",
    route: `${route}`,
    params: ["email*", "amount*"]
  },

  /*
  Submit PIN
  */
  submitPIN: {
    method: "post",
    route: `${route}/submit_pin`,
    params: ["pin*", "reference*"]
  },

  /*
  Submit OTP
  */
  submitOTP: {
    method: "post",
    route: `${route}/submit_otp`,
    params: ["otp*", "reference*"]
  },

  /*
  Submit Phone
  */
  submitPhone: {
    method: "post",
    route: `${route}/submit_phone`,
    params: ["phone*", "reference*"]
  },

  /*
  Submit Birthday
  */
  submitBirthday: {
    method: "post",
    route: `${route}/submit_birthday`,
    params: ["birthday*", "reference*"]
  },

  /*
  Check Charge
  */
  checkCharge: {
    method: "get",
    route: `${route}/{reference}`
  }
};
