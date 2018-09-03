/*
Paystack API - Bulk Charge
*/

const route = "/bulkcharge";

module.exports = {
  /*
  Initiate Bulk Charge
  */
  create: {
    method: "post",
    route: route
  },

  /*
  List Bulk Charge
  */
  list: {
    method: "get",
    route: route,
    args: ["perPage", "page"]
  },

  /*
  Get Bulk Charge
  */
  get: {
    method: "get",
    route: `${route}/{id}`
  },

  /*
  Get Charges in a Batch
  */
  getCharges: {
    method: "get",
    route: `${route}/{id}/charges`
  },

  /*
  Pause Bulk Charge
  */
  pause: {
    method: "get",
    route: `${route}/pause/{batch_code}`
  },

  /*
  Resume Bulk Charge
  */
  resume: {
    method: "get",
    route: `${route}/resume/{batch_code}`
  }
};
