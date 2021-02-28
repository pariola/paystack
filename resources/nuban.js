/*
Paystack API - Dedicated NUBAN
*/

const route = "/dedicated_account";

module.exports = {
  /*
  Create dedicated account
  */
  create: {
    method: "post",
    route: route,
    params: ["customer*", "preferred_bank"]
  },

  /*
  List dedicated accounts
  */
  list: {
    method: "get",
    route: route,
    args: ["active*", "currency*", "provider_slug", "bank_id", "customer", "perPage", "page"]
  },

  /*
  Fetch dedicated account
  */
  get: {
    method: "get",
    route: `${route}/{id}`
  },

  /*
  Deactivate dedicated account
  */
 deactivate: {
    method: "delete",
    route: `${route}/{id}`
  }
};