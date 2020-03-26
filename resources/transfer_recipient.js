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
    args: ["perPage", "page"]
  },

  /**
   * Update Transfer Recipient
   */

   update: {
     method: 'put',
     route: [route, "/{recipient_code}"].join(""),
     params: ["name*", "email*"]
   },

   /**
    * Delete Transfer Recipient
    */

    remove: {
      method: 'delete',
      route: [route, "/{recipient_code}"].join(""),
    }

};
