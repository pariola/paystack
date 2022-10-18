/*
Paystack API - Subscription
*/

const route = "/subscription";

module.exports = {
  /*
  Create Subscription
  */
  create: {
    method: "post",
    route: route,
    params: ["customer*", "plan*", "authorization*"] // ...
  },

  /*
  List Subscriptions
  */
  list: {
    method: "get",
    route: route,
    args: ["perPage", "page"]
  },

  /*
  Disable Subscription
  */
  disable: {
    method: "post",
    route: `${route}/disable`,
    params: ["code*", "token*"]
  },

  /*
  Enable Subscription
  */
  enable: {
    method: "post",
    route: `${route}/enable`,
    params: ["code*", "token*"]
  },

  /*
  Get Subscription
  */
  get: {
    method: "get",
    route: `${route}/{id}`
  },
    /*
    Update subscription
    */
  update: {
    method: "get",
    // endpoint:[root, '/manage/link'].join(''),
    route: `${route}/{code}/manage/link`,
    //  params: ['code*','id_or_subscription_code'],
    params: ["code"],
  }
};
