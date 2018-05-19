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

### Contributing

* Please do 🧡

### TODO
- Make it available on NPM