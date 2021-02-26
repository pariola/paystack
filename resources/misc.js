
module.exports = {
  /*
		List supported banks
	*/
  list_banks: {
    method: "get",
    route: "/bank",
    args: ["perPage", "page", "type", "currency", "country"]
  }
};
