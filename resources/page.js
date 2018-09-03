/*
Paystack API - Payment Page
*/

const route = "/page";

module.exports = {
  /*
  Create Page
  */
  create: {
    method: "post",
    route: route,
    params: ["name*"] // ...
  },

  /*
  List Pages
  */
  list: {
    method: "get",
    route: route,
    args: ["perPage", "page"]
  },

  /*
  Get Page
  */
  get: {
    method: "get",
    route: `${route}/{id}`
  },

  /*
  Update Page
  */
  update: {
    method: "put",
    route: `${route}/{id}`
  },

  /*
  Check Slug Availability
  */
  slugAvailable: {
    method: "get",
    route: `${route}/check_slug_availability/{slug}`
  }
};
