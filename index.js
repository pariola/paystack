/*
Paystack API wrapper
@author Pariola Blessing <@pariola>
*/

const request = require("request-promise");
const endpoint = "https://api.paystack.co";

function Paystack(key) {
  if (!(this instanceof Paystack)) {
    return new Paystack(key);
  }

  this.endpoint = endpoint;
  this.key = key;
  this.import();
}

const resources = {
  customer: require("./resources/customer"),
  misc: require("./resources/misc")
};

Paystack.prototype = {
  extend: function(params) {
    const me = this;
    return function() {
      const args = arguments[0] || {};

      // check method
      const method = ["post", "get", "put"].includes(params.method)
        ? params.method
        : (function() {
            throw new Error("Method not Allowed! - Resource declaration error");
          })();

      var endpoint = me.endpoint + params.route,
        body,
        qs = {};

      // incase of endpoints with no params requirement
      if (params.params) {
        // check args
        params.params.filter(param => {
          if (!param.includes("*")) return;

          param = param.replace("*", "");
          if (!(param in args)) {
            throw new Error(`Parameter '${param}' is required`);
          }

          return;
        });

        body = args;
      }

      // incase of endpoints with no params requirement
      if (params.args) {
        // check args
        params.args.filter(a => {
          if (!a.includes("*")) return;

          a = a.replace("*", "");
          if (!(a in args)) {
            throw new Error(`Argument '${a}' is required`);
          } else {
            qs[`${a}`] = args[`${a}`];
          }

          return;
        });
      }

      var argsInEndpoint = endpoint.match(/{[^}]+}/g);
      if (argsInEndpoint) {
        argsInEndpoint.map(arg => {
          arg = arg.replace(/\W/g, "");
          if (!(arg in args)) {
            throw new Error(`Argument '${arg}' is required`);
          } else {
            endpoint = endpoint.replace(`{${arg}}`, args[`${arg}`]);
          }
        });
      }

      // Create request
      const options = {
        url: endpoint,
        json: true,
        method: method.toUpperCase(),
        headers: {
          Authorization: ["Bearer ", me.key].join("")
        }
      };

      if (method == "post" || method == "put") {
        options.body = args;
      } else {
        options.qs = args;
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
  }
};

module.exports = Paystack;
