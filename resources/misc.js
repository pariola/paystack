/*
Paystack API - Miscellanous
* Miscellanous functions have different endpoints
*/

module.exports = {
  /*
		List supported banks
	*/
  list_banks: {
    method: "get",
    route: "/bank",
    params: ["perPage", "page"]
  },

  resolve_bin: {
    method: "get",
    route: "/decision/bin/{id}",
    args: ["id"]
  },

  /*
		Resolve account no
	*/
  resolve_account: {
    method: "get",
    route: "/bank/resolve",
    args: ["account_number*", "bank_code*"]
  }
};
