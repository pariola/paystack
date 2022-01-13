// types/index.d.ts

/// <reference path="interfaces.d.ts" />

declare module "paystack-api" {
  interface API {
    plan: PlanResource;
    page: PaymentPageResource;
    customer: CustomerResource;
    control_panel: ControlPanelResource;
    transfer_control: TransferControlResource;
    transfer_recipient: TransferRecipientResource;
    refund: RefundResource;
    settlement: SettlementResource;
    subaccount: SubaccountResource;
    charge: ChargeResource;
    bulk_charge: BulkChargeResource;
    invoice: InvoiceResource;
  }

  export default function Paystack(secretKey: string): API;

  class PlanResource {
    get(options: GetPlanOptions): Promise<Object>;
    list(options: ListPlansOptions): Promise<Object>;
    create(options: CreatePlanOptions): Promise<Object>;
    update(options: UpdatePlanOptions): Promise<Object>;
  }

  class CustomerResource {
    get(options: GetCustomerOptions): Promise<Object>;
    list(options: ListCustomersOptions): Promise<Object>;
    create(options: CreateCustomerOptions): Promise<Object>;
    update(options: UpdateCustomerOptions): Promise<Object>;
    validate(options: ValidateCustomerOptions): Promise<Object>;
    setRiskAction(options: SetCustomerRiskActionOptions): Promise<Object>;
    deactivateAuth(options: DeactivateCustomerAuthOptions): Promise<Object>;
  }

  class PaymentPageResource {
    get(options: GetPaymentPageOptions): Promise<Object>;
    list(options: ListPaymentPagesOptions): Promise<Object>;
    create(options: CreatePaymentPageOptions): Promise<Object>;
    update(options: UpdatePaymentPageOptions): Promise<Object>;
    slugAvailable(options: CheckSlugAvailablilityOptions): Promise<Object>;
  }

  class ControlPanelResource {
    getSessionTimeout(): Promise<Object>;
    updeteSessionTimeout(options: UpdateSessionTimeoutOptions): Promise<Object>;
  }

  class SettlementResource {
    list(options: ListSettlementOptions): Promise<Object>;
  }

  class TransferControlResource {
    balance(): Promise<Object>;
    enableOTP(): Promise<Object>;
    disableOTP(): Promise<Object>;
    resendOTP(options: ResendOTPOptions): Promise<Object>;
    finalizeDisableOTP(options: FinalizeDisableOTPOptions): Promise<Object>;
  }

  class TransferRecipientResource {
    list(options: ListTransferRecipientOptions): Promise<Object>;
    create(options: CreateTransferRecipientOptions): Promise<Object>;
    update(options: UpdateTransferRecipientOptions): Promise<Object>;
    remove(options: RemoveTransferRecipientOptions): Promise<Object>;
  }

  class RefundResource {
    get(options: GetRefundOptions): Promise<Object>;
    list(options: ListRefundsOptions): Promise<Object>;
    create(options: CreateRefundOptions): Promise<Object>;
  }

  class SubaccountResource {
    get(options: GetSubaccountOptions): Promise<Object>;
    list(options: ListSubaccountOptions): Promise<Object>;
    create(options: CreateSubaccountOptions): Promise<Object>;
    update(options: UpdateSubaccountOptions): Promise<Object>;
  }

  class ChargeResource {
    charge(options: CreateChargeOptions): Promise<Object>;
    submitPIN(options: SubmitPINOptions): Promise<Object>;
    submitOTP(options: SubmitOTPOptions): Promise<Object>;
    submitPhone(options: SubmitPhoneOptions): Promise<Object>;
    submitBirthday(options: SubmitBirthdayOptions): Promise<Object>;
    checkCharge(options: CheckChargeOptions): Promise<Object>;
  }

  class BulkChargeResource {
    get(options: GetBulkChargeOptions): Promise<Object>;
    list(options: ListBulkChargesOptions): Promise<Object>;
    pause(options: PauseBulkChargeOptions): Promise<Object>;
    resume(options: ResumeBulkChargeOptions): Promise<Object>;
    create(options: CreateBulkChargeOptions): Promise<Object>;
    getCharges(options: GetChargesInBulkChargeOptions): Promise<Object>;
  }

  class InvoiceResource {
    get(options: GetInvoiceOptions): Promise<Object>;
    list(options: ListInvoicesOptions): Promise<Object>;
    create(options: CreateInvoiceOptions): Promise<Object>;
    verify(options: VerifyInvoiceOptions): Promise<Object>;
    notify(options: SendInvoiceNotificationOptions): Promise<Object>;
    invoiceMetrics(options: GetInvoiceTotalsOptions): Promise<Object>;
    updateInvoice(options: UpdateInvoiceOptions): Promise<Object>;
    archiveInvoice(options: ArchiveInvoiceOptions): Promise<Object>;
    draftInvoice(options: FinalizeInvoiceOptions): Promise<Object>;
  }
}
