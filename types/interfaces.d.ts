// types/interfaces.d.ts

interface ListOptions {
  page: Number;
  perPage: Number;
  [key: string]: any;
}

// Plan Resource

interface GetPlanOptions {
  id: string;
}

interface CreatePlanOptions {
  name: string;
  amount: Number;
  interval: string;
}

interface UpdatePlanOptions {
  [key: string]: any;
}

// Customer Resource

interface GetCustomerOptions {
  id: string;
}

interface CreateCustomerOptions {
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  metadata: Object;
}

interface UpdateCustomerOptions {
  first_name: string;
  last_name: string;
  phone: string;
  metadata: Object;
}

interface ValidateCustomerOptions {
  first_name: string;
  last_name: string;
  type: string;
  value: string;
  country: string;
}

interface SetCustomerRiskActionOptions {
  customer: string;
  risk_action: string;
}

interface DeactivateCustomerAuthOptions {
  authorization_code: string;
}
