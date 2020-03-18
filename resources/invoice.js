/*
Paystack API - Invoices
*/

const route = "/paymentrequest";

module.exports = {
  /*
  Create Invoice
  */
  create: {
    method: "post",
    route: route,
    params: ["customer*", "amount*", "due_date*"] // ...
  },

  /*
  List Invoices
  */
  list: {
    method: "get",
    route: route,
    args: ["customer", "status", "currency", "paid", "include_archive"]
  },

  /*
  Get Invoice
  */
  get: {
    method: "get",
    route: `${route}/{invoice_id}`
  },

  /*
  Verify Invoice
  */
  verify: {
    method: "get",
    route: `${route}/verify/{invoice_code}`
  },

  /*
  Send Notification
  */
  notify: {
    method: "post",
    route: `${route}/notify/{id}`
  },

  /*
  Invoice Metrics
  */
  invoiceMetrics: {
    method: "get",
    route: `${route}/totals`
  },

  /*
  Draft Invoice
  */
  draftInvoice: {
    method: "post",
    route: `${route}/finalize/{id}`
  },

  /*
  Update Invoice
  */
  updateInvoice: {
    method: "put",
    route: `${route}/{id}`
  },

  /*
  Archive Invoice
  */
  archiveInvoice: {
    method: "post",
    route: `/invoice/archive/{id}`
  }
};
