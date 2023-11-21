export interface Costumer {
  name: string;
  address: string;
  email: string;
  phone: string;
  plan: {
    name?: string;
    value?: string;
    startDate?: string;
  };
}
