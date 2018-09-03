/*
Paystack API - Plan
*/

const route = "/plan";

module.exports = {
  /*
  Create Plan
  */
  create: {
    method: "post",
    route: route,
    params: [
      "name*",
      "amount*",
      "interval*"
    ] // ...
  },

  /*
  List Plans
  */
  list: {
    method: "get",
    route: route,
    args: ["perPage", "page"]
  },

  /*
  Get Plan
  */
  get: {
    method: "get",
    route: `${route}/{id}`
  },

  /*
  Update Plan
  */
  update: {
    method: "put",
    route: `${route}/{id}`
  }
};
