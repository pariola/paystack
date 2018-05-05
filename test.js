const paystack = require('./index')('dsds')

paystack.customer.get({
    id: '2',
  email: 'Hello',
  phone: 'fdsfd'
})