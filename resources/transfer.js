/*
Paystack API - Transfers
*/

const route = "/transfer";

module.exports = {
  /*
  Initiate Transfer
  */
  create: {
    method: "post",
    route: route,
    params: ["source*", "amount*", "recipient*"] // ...
  },

  /*
  List Transfers
  */
  list: {
    method: "get",
    route: route,
    params: ["perPage", "page"]
  },

  /*
  Get Transfer
  */
  get: {
    method: "get",
    route: `${route}/{id}`
  },

  /*
  Finalize Transfer
  */
 finalize: {
    method: "post",
    route: route,
    params: ["transfer_code*", "otp*"] // ...
  },

  /*
  Bulk Transfer
  */
 bulkTransfer: {
    method: "post",
    route: `${route}/bulk`
  }
};
