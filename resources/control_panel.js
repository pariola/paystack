/*
Paystack API - Control Panel
*/

const route = "/integration";

module.exports = {
  /*
  Fetch Payment Session Timeout
  */
  getSessionTimeout: {
    method: "get",
    route: `${route}/payment_session_timeout`
  },

  /*
  Update Payment Session Timeout
  */
  updeteSessionTimeout: {
    method: "put",
    route: `${route}/payment_session_timeout`,
    params: ["timeout"]
  }
};
