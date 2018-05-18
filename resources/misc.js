
module.exports = {
  /*
		List supported banks
	*/
  list_banks: {
    method: "get",
    route: "/bank",
    params: ["perPage", "page"]
  }
};
