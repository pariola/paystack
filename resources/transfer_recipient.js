/*
Paystack API - Transfer Recipient
*/

const route = "/transferrecipient";

module.exports = {
  /*
  Create Transfer Recipient
  */
  create: {
    method: "post",
    route: route,
    params: ["type*", "name*", "account_number*", "bank_code*"] // ...
  },

  /*
  List Transfer Recipients
  */
  list: {
    method: "get",
    route: route,
    params: ["perPage", "page"]
  }
};
