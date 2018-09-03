/*
Paystack API - Verification
*/

const route = "/bank";

module.exports = {
  /*
  Resolve BVN
  */
  resolveBVN: {
    method: "get",
    route: `${route}/resolve_bvn/{bvn}`
  },

  /*
  Match BVN
  */
  matchBVN: {
    method: "get",
    route: `${route}/match_bvn`,
    args: ["account_number*", "bank_code*", "bvn*"]
  },

  /*
  Resolve Account Number
  */
  resolveAccount: {
    method: "get",
    route: `${route}/resolve`,
    args: ["account_number", "bank_code"]
  },

  /*
  Resolve Card BIN
  */
  resolveBIN: {
    method: "get",
    route: `/decision/bin/{bin}`
  },

  /*
  Resolve Phone Number
  */
  resolvePhone: {
    method: "post",
    route: `/verifications`
  }
};
