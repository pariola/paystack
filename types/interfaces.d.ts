// types/interfaces.d.ts

type Currency = "NGN" | "GHS" | "ZAR" | "USD";

interface ListOptions {
  page: Number;
  perPage: Number;
}

interface DateFilterableListOptions extends ListOptions {
  to: string;
  from: string;
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

interface ListCustomersOptions extends DateFilterableListOptions {}

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

interface ListPaymentPagesOptions extends DateFilterableListOptions {}

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

interface ListSettlementOptions extends DateFilterableListOptions {
  id: string;
}

// Transfer Control Resource

type ResendOTPReason = "resend_otp" | "transfer";

interface ResendOTPOptions {
  transfer_code: string;
  reason: ResendOTPReason;
}

interface FinalizeDisableOTPOptions {
  otp: string;
}

// Transfer Recipient

interface ListTransferRecipientOptions extends DateFilterableListOptions {}

interface CreateTransferRecipientOptions {
  type: string;
  name: string;
  account_number: string;
  bank_code: string;
  description: string;
  currency: string;
  authorization_code: string;
  metadata: Object;
}

interface UpdateTransferRecipientOptions {
  id: string;
  name: string;
  email: string;
}

interface RemoveTransferRecipientOptions {
  id: string;
}

// Refund Resource

interface GetRefundOptions {
  trans_id: string;
}

interface ListRefundsOptions extends DateFilterableListOptions {
  reference: string;
  currency: Currency;
}

interface CreateRefundOptions {
  transaction: string;
  amount: Number;
  currency: Currency;
  customer_note: string;
  merchant_note: string;
}

// Subaccount Resource

interface GetSubaccountOptions {
  id: string;
}

interface ListSubaccountOptions extends DateFilterableListOptions {}

interface CreateSubaccountOptions {
  business_name: string;
  settlement_bank: string;
  account_number: string;
  percentage_charge: Number;
  description: string;
}

interface UpdateSubaccountOptions {
  id: string;
  business_name: string;
  settlement_bank: string;
  account_number: string;
  percentage_charge: Number;
  description: string;
}

// Charge Resource

interface CreateChargeOptions {
  email: string;
  amount: Number;
  bank: string;
  authorization_code: string;
  pin: string;
  metadata: Object;
  reference: string;
  ussd: Object;
  mobile_money: Object;
  device_id: string;
}

interface SubmitPINOptions {
  pin: string;
  reference: string;
}

interface SubmitOTPOptions {
  otp: string;
  reference: string;
}

interface SubmitPhoneOptions {
  phone: string;
  reference: string;
}
interface SubmitBirthdayOptions {
  birthday: string;
  reference: string;
}

interface CheckChargeOptions {
  reference: string;
}

// Bulk Charge Resource

interface GetBulkChargeOptions {
  id: string;
}

interface ListBulkChargesOptions extends DateFilterableListOptions {}

interface PauseBulkChargeOptions {
  batch_code: string;
}

interface ResumeBulkChargeOptions {
  batch_code: string;
}

interface CreateBulkChargeOption {
  amount: Number;
  authorization: string;
}

interface CreateBulkChargeOptions extends Array<CreateBulkChargeOption> {}

interface GetChargesInBulkChargeOptions extends DateFilterableListOptions {
  id: string;
  status: string;
}

// Invoice Resource

interface GetInvoiceOptions {
  invoice_id: string;
}

interface ListInvoicesOptions extends DateFilterableListOptions {
  status: string;
  customer: string;
  currency: Currency;
  include_archive: string;
}

interface Tax {
  name: string;
  amount: Number;
}

interface LineItem {
  name: string;
  amount: Number;
  quantity: Number;
}

interface CreateInvoiceOptions {
  customer: string;
  amount: Number;
  due_date: string;
  description: string;
  curreny: Currency;
  tax: [Tax];
  line_items: [LineItem];
  send_notification: boolean;
  draft: boolean;
  has_invoice: boolean;
  invoice_number: Number;
  split_code: string;
}

interface VerifyInvoiceOptions {
  invoice_code: string;
}

interface SendInvoiceNotificationOptions {
  id: string;
}

interface GetInvoiceTotalsOptions {}

interface UpdateInvoiceOptions {
  id: string;
  customer: string;
  amount: Number;
  due_date: string;
  description: string;
  curreny: Currency;
  tax: [Tax];
  line_items: [LineItem];
  send_notification: boolean;
  draft: boolean;
  has_invoice: boolean;
  invoice_number: Number;
  split_code: string;
}

interface ArchiveInvoiceOptions {
  id: string;
}

interface FinalizeInvoiceOptions {
  id: string;
}
