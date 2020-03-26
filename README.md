# paystack

Yet a new [Paystack](https://paystack.co/) API wrapper 😉

### Installation

For Yarn
```
yarn add paystack-api
```
For NPM
```
npm install paystack-api --save
```

### Usage

```js
// Require the library
var paystack = require("paystack-api")("secret_key");
```

#### Making calls

The resource methods promisified

Format → `paystack.{resource}.{method}`

```js
// paystack.{resource}.{method}
paystack.customer
  .list()
  .then(function(body) {
    console.log(body);
  })
  .catch(function(error) {
    console.log(error);
  });
```

All Resource methods parameters are provided as the only argument

```js
paystack.plan
  .create({
    name: "API demo",
    amount: 10000,
    interval: "monthly"
  })
  .then(function(error, body) {
    console.log(error);
    console.log(body);
  });
```

```js
paystack.transactions.list({ perPage: 20 }).then(function(error, body) {
  console.log(error);
  console.log(body);
});
```

### Extras

#### I

A function to add Paystack's fee to your charging fee

```js
const helper = new paystack.FeeHelper();
console.log(helper.addFeesTo(5000));
```

Outputs → `5077` which includes Paystack's fee upfront

OR set your desired parameters

```js
const helper = new paystack.FeeHelper({
percentage: ...,
  cap: ...,
  threshold: ...,
  additionalCharge: ....
});
console.log(helper.addFeesTo(5000));
```

#### II

A Paystack Events helper (Express Middleware)
```js
const paystack = require("paystack-api")("secret_key");
const events = paystack.Events;

events.on("event_name", data => {
    // Act
  console.log("hola!");
});

// Hooks with Express
app.post("/my/webhook/url", events.middleware);
```


### Resources

* customer
  * create
  * get
  * list
  * update
  * setRiskAction
  * deactivateAuth
* transaction
  * initialize
  * verify
  * list
  * get
  * chargeAuth
  * viewTimeline
  * viewTimelineRef
  * totals
  * export
  * reAuthorize
  * checkAuth
* plan
  * create
  * get
  * list
  * update
* page
  * create
  * get
  * list
  * update
  * slugAvailable
* charge
  * tokenize
  * charge
  * submitPIN
  * submitOTP
  * submitPhone
  * submitBirthday
  * checkCharge
* bulk_charge
  * create
  * list
  * get
  * getCharges
  * pause
  * resume
* invoice
  * create
  * list
  * get
  * verify
  * notify
  * invoiceMetrics
  * draftInvoice
  * updateInvoice
  * archiveInvoice
* control_panel
  * getSessionTimeout
  * updateSessionTimeout
* refund
  * create
  * list
  * get
* settlement
  * list
* subaccount
  * create
  * list
  * get
  * update
* subscription
  * create
  * disable
  * enable
  * get
  * list
* transfer_control
  * balance
  * resendOTP
  * enableOTP
  * disableOTP
  * finalizeDisableOTP
* transfer_recipient
  * create
  * list
  * update
  * remove
* transfer
  * create
  * list
  * get
  * finalize
  * bulkTransfer
* verification
  * resolveBVN
  * matchBVN
  * resolveAccount
  * resolveBIN
  * resolvePhone
* misc
  * list_banks
* feeHelper

### Contributing

* Please do 🧡

### TODO

* [X] Create a Paystack Events `express` middleware
