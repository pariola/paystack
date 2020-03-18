/*
Paystack API - Refund
*/

const route = "/refund";

module.exports = {
  /*
  Create Refund
  */
  create: {
    method: "post",
    route: route,
    params: ["transaction*", "amount*"] // ...
  },

  /*
  List Refunds
  */
  list: {
    method: "get",
    route: route,
    args: ["reference", "currency"]
  },

  /*
  Get Refund
  */
  get: {
    method: "get",
    route: `${route}/{trans_id}`
  }
};
