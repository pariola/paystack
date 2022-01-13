// types/index.d.ts

/// <reference path="interfaces.d.ts" />

declare module "paystack-api" {
  interface API {
    plan: PlanResource;
    page: PaymentPageResource;
    customer: CustomerResource;
    control_panel: ControlPanelResource;
    transfer_control: TransferControlResource;
    refund: RefundResource;
    settlement: SettlementResource;
    subaccount: SubaccountResource;
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
}
