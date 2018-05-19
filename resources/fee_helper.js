const DEFAULT_PERCENTAGE = 0.015;
const DEFAULT_ADDITIONAL_CHARGE = 10000;
const DEFAULT_THRESHOLD = 250000;
const DEFAULT_CAP = 200000;

function Helper({
  percentage = DEFAULT_PERCENTAGE,
  cap = DEFAULT_CAP,
  threshold = DEFAULT_THRESHOLD,
  additionalCharge = DEFAULT_ADDITIONAL_CHARGE
} = {}) {
  // Validation
  if (percentage <= 0 || percentage >= 1)
    throw new Error("Percentage can only be between 0 and 1");
  if (cap < 0) throw new Error("Cap must be more than 0");
  if (threshold < 0) throw new Error("Threshold must be more than 0");
  if (additionalCharge < 0)
    throw new Error("Additional Charge must be more than 0");

  this.percentage = percentage;
  this.cap = cap;
  this.threshold = threshold;
  this.additionalCharge = additionalCharge;

  this.chargeDivider = 1 - percentage;
  this.crossOver = threshold * this.chargeDivider - additionalCharge;
  this.flatLineWithCharge = (cap - additionalCharge) / percentage;
  this.flatLine = this.flatLineWithCharge - cap;
}

Helper.prototype.addFeesTo = function(amountKobo) {
  if (amountKobo > this.flatLine) {
    return Math.ceil(amountKobo + this.cap);
  } else if (amountKobo > this.crossover) {
    return Math.ceil((amountKobo + this.additionalCharge) / this.chargeDivider);
  } else {
    return Math.ceil(amountKobo / this.chargeDivider);
  }
};

module.exports = Helper;
