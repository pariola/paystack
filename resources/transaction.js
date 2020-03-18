"use strict";

var route = "/transaction";

module.exports = {
  /*
  Initialize transaction
  */
  initialize: {
    method: "post",
    route: [route, "/initialize"].join(""),
    params: ["reference", "amount*", "email*", "plan"]
  },

  /*
  Verify transaction
  */
  verify: {
    method: "get",
    route: [route, "/verify/{reference}"].join("")
  },

  /*
  List transactions
  */
  list: {
    method: "get",
    route: route,
    args: ["perPage", "page", "customer", "status", "from", "to", "amount"]
  },

  /*
  Get transaction
  */
  get: {
    method: "get",
    route: [route, "/{id}"].join("")
  },

  /*
  Charge authorization
  */
  chargeAuth: {
    method: "post",
    route: [route, "/charge_authorization"].join(""),
    params: ["reference", "authorization_code*", "email*", "amount*"]
  },

  /*
  View Transaction timeline with ID
  */
  viewTimeline: {
    method: "get",
    route: [route, "/timeline/{id}"].join("")
  },

  /*
  View Transaction timeline with Reference
  */
  viewTimelineRef: {
    method: "get",
    route: [route, "/timeline/{reference}"].join("")
  },

  /*
  Get totals
  */
  totals: {
    method: "get",
    route: [route, "/totals"].join("")
  },

  /*
  Export transactions
  */
  export: {
    method: "get",
    route: [route, "/export"].join(""),
    args: ["from", "to", "settled", "payment_page"]
  },

  /*
  Request Reauthorization
  */
  reAuthorize: {
    method: "post",
    route: [route, "/request_reauthorization"].join(""),
    params: ["authorization_code*", "amount*", "email*"]
  },

  /*
  Check Authorization
  */
  checkAuth: {
    method: "post",
    route: [route, "/check_authorization"].join(""),
    params: ["authorization_code*", "amount*", "email*"]
  }
};
