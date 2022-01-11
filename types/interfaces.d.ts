// types/interfaces.d.ts

type Currency = "NGN" | "GHS" | "ZAR" | "USD";

interface ListOptions {
  page: Number;
  perPage: Number;
  [key: string]: any;
}

// Plan Resource

interface GetPlanOptions {
  id: string;
}

type PlanInterval = "daily" | "weekly" | "monthly" | "biannually" | "annually";

interface ListPlansOptions extends ListOptions {
  status: string;
  amount: Number;
  interval: PlanInterval;
}

interface CreatePlanOptions {
  name: string;
  amount: Number;
  interval: PlanInterval;
  description: string;
  send_sms: boolean;
  send_invoices: boolean;
  currency: Currency;
  invoice_limit: Number;
}

interface UpdatePlanOptions {
  id: string;
  name: string;
  amount: Number;
  interval: PlanInterval;
  description: string;
  send_sms: boolean;
  send_invoices: boolean;
  currency: Currency;
  invoice_limit: Number;
}

// Customer Resource

interface GetCustomerOptions {
  // id can be email or customer code
  id: string;
}

interface ListCustomersOptions extends ListOptions {
  to: string;
  from: string;
}

interface CreateCustomerOptions {
  email: string;
  first_name: string;
  last_name: string;
  phone: string;
  metadata: Object;
}

interface UpdateCustomerOptions {
  first_name: string;
  last_name: string;
  phone: string;
  metadata: Object;
}

type ValidateCustomerIdentification = "bvn" | "bank_account";

interface ValidateCustomerOptions {
  first_name: string;
  last_name: string;
  type: ValidateCustomerIdentification;
  value: string;
  country: string;
  bvn: string;
  bank_code: string;
  account_number: string;
}

type CustomerRiskAction = "default" | "allow" | "deny";

interface SetCustomerRiskActionOptions {
  customer: string;
  risk_action: CustomerRiskAction;
}

interface DeactivateCustomerAuthOptions {
  authorization_code: string;
}

// Payment Page Resource

interface GetPaymentPageOptions {
  id: string;
}

interface ListPaymentPagesOption extends ListOptions {
  to: string;
  from: string;
}

interface CreatePaymentPageOptions {
  name: string;
  description: string;
  amount: Number;
  slug: string;
  metadata: Object;
  redirect_url: string;
  custom_fields: [any];
}

interface UpdatePaymentPageOptions {
  id: string;
  name: string;
  description: string;
  amount: Number;
  active: boolean;
}

interface CheckSlugAvailablilityOptions {
  slug: string;
}

// Control Panel Resource

interface UpdateSessionTimeoutOptions {
  timeout: Number;
}

// Settlement Resource

interface ListSettlementOptions extends ListOptions {
  id: string;
  to: string;
  from: string;
}
