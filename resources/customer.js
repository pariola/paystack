/*
Paystack API - Customer
*/

const route = "/customer";

module.exports = {
  /*
  Create customer
  */
  create: {
    method: "post",
    route: route,
    params: ["first_name", "last_name", "email*", "phone"]
  },

  /*
  Get customer
  */
  get: {
    method: "get",
    route: [route, "/{id}"].join(""),
    args: ["id*"]
  },

  /*
List customers
*/
  list: {
    method: "get",
    route: route
  },

  /*
Update customer
@param: first_name, last_name, email, phone
*/
  update: {
    method: "put",
    route: [route, "/{id}"].join(""),
    params: ["id*", "first_name", "last_name", "email", "phone"]
  },

  /*
White/Blacklist customer
@param: customer, risk_action ('allow' to whitelist or 'deny' to blacklist)
*/
  setRiskAction: {
    method: "post",
    route: [route, "/set_risk_action"].join(""),
    params: ["customer*", "risk_action"]
  },

  /*
Delete Authorization for customer
@param: authorization_code
*/
  deleteAuth: {
    method: "post",
    route: [route, "/deactivate_authorization"].join(""),
    params: ["authorization_code*"]
  }
};
