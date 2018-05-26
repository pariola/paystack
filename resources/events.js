const crypto = require("crypto");
const mitt = require("mitt");

const emitter = mitt();

function Events(key) {
  this.key = key;
}

Events.prototype.middleware = function(req, res) {
  res.sendStatus(200);
  // Validate request
  var hash = crypto
    .createHmac("sha512", this.key)
    .update(JSON.stringify(req.body))
    .digest("hex");
  if (hash == req.headers["x-paystack-signature"]) {
    // Retrieve the request's body
    var event = req.body;
    emitter.emit(event.event, event.data);
  }
};

// Extend emitter
Events.prototype.on = emitter.on;
Events.prototype.off = emitter.off;

module.exports = Events;
