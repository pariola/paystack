/*
Paystack API - Subaccount
*/

const route = "/subaccount";

module.exports = {
  /*
  Create subaccount
  */
  create: {
    method: "post",
    route: route,
    params: [
      "business_name*",
      "settlement_bank*",
      "account_number*",
      "percentage_charge*"
    ] // ...
  },

  /*
  List Subaccounts
  */
  list: {
    method: "get",
    route: route,
    args: ["perPage", "page"]
  },

  /*
  Get Subacount
  */
  get: {
    method: "get",
    route: `${route}/{id}`
  },

  /*
  Update Subaccount
  */
  update: {
    method: "put",
    route: `${route}/{id}`,
    params: [
      "business_name",
      "settlement_bank",
      "account_number",
      "percentage_charge"
    ] // ...
  }
};
