// types/index.d.ts

/// <reference path="interfaces.d.ts" />

declare module "paystack-api" {
  interface API {
    plan: PlanResource;
    customer: CustomerResource;
  }

  export default function Paystack(secretKey: string): API;

  class PlanResource {
    get(options: GetPlanOptions): Promise<Object>;
    list(options: ListOptions): Promise<Object>;
    create(options: CreatePlanOptions): Promise<Object>;
    update(options: UpdatePlanOptions): Promise<Object>;
  }

  class CustomerResource {
    get(options: GetCustomerOptions): Promise<Object>;
    list(options: ListOptions): Promise<Object>;
    create(options: CreateCustomerOptions): Promise<Object>;
    update(options: UpdateCustomerOptions): Promise<Object>;
    validate(options: ValidateCustomerOptions): Promise<Object>;
    setRiskAction(options: SetCustomerRiskActionOptions): Promise<Object>;
    deactivateAuth(options: DeactivateCustomerAuthOptions): Promise<Object>;
  }
}
