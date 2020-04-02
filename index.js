/*
Paystack API wrapper
@author Pariola Blessing <@pariola>
*/

const request = require("request-promise");
const endpoint = "https://api.paystack.co";
const Events = require("./resources/events");

function Paystack(key) {
  if (!(this instanceof Paystack)) {
    return new Paystack(key);
  }

  this.endpoint = endpoint;
  this.key = key;
  this.import();

  // Setup Events
  this.Events = new Events(this.key);
}

const resources = {
  customer: require("./resources/customer"),
  bulk_charge: require("./resources/bulk_charge"),
  charge: require("./resources/charge"),
  control_panel: require("./resources/control_panel"),
  invoice: require("./resources/invoice"),
  page: require("./resources/page"),
  plan: require("./resources/plan"),
  refund: require("./resources/refund"),
  settlement: require("./resources/settlement"),
  subaccount: require("./resources/subaccount"),
  subscription: require("./resources/subscription"),
  transaction: require("./resources/transaction"),
  transfer_control: require("./resources/transfer_control"),
  transfer_recipient: require("./resources/transfer_recipient"),
  transfer: require("./resources/transfer"),
  verification: require("./resources/verification"),
  misc: require("./resources/misc")
};

Paystack.prototype = {
  extend: function(func) {
    const me = this;
    return function() {
      const data = arguments[0] || {};

      // check method
      const method = ["post", "get", "put", "delete"].includes(func.method)
        ? func.method
        : (function() {
            throw new Error("Method not Allowed! - Resource declaration error");
          })();

      var endpoint = me.endpoint + func.route,
        qs = {};

      // Highest priority should go to path variables parsing and validation
      var argsInEndpoint = endpoint.match(/{[^}]+}/g);
      if (argsInEndpoint) {
          argsInEndpoint.map(arg => {
            arg = arg.replace(/\W/g, "");
            if (!(arg in data)) {
              throw new Error(`Argument '${arg}' is required`);
            } else {
              endpoint = endpoint.replace(`{${arg}}`, data[`${arg}`]);
              // to avoid error, remove the path arg from body | qs params
              // by deleting it from the data object before body | qs params are set
              delete data[arg];
            }
          });
      }

      // incase of endpoints with no params requirement
      if (func.params) {
        // check args
        func.params.filter(param => {
          if (!param.includes("*")) return;

          param = param.replace("*", "");
          if (!(param in data)) {
            throw new Error(`Parameter '${param}' is required`);
          }

          return;
        });
      }

      // incase of endpoints with no args requirement
      if (func.args) {
        // check args
        func.args.filter(a => {
          // remove unwanted properties
          if (!a.includes("*")) {
            if (a in data) {
              qs[`${a}`] = data[`${a}`];
            }
            return;
          }

          a = a.replace("*", "");
          if (!(a in data)) {
            throw new Error(`Argument '${a}' is required`);
          } else {
            qs[`${a}`] = data[`${a}`];
          }

          return;
        });
      }

      // Create request
      const options = {
        url: endpoint,
        json: true,
        method: method.toUpperCase(),
        headers: {
          Authorization: `Bearer ${me.key}`
        }
      };

      if (method == "post" || method == "put") {
        options.body = data;
      } else {
        options.qs = qs;
      }

      return request(options);
    };
  },
  import: function() {
    for (var i in resources) {
      const anon = function() {};
      for (var j in resources[i]) {
        anon.prototype[j] = this.extend(resources[i][j]);
      }
      Paystack.prototype[i] = new anon();
    }
  },
  FeeHelper: require("./resources/fee_helper")
};

module.exports = Paystack;
