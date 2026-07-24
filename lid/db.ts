export interface Customer {

  id: string;

  fullName: string;

  gender: string;

  birthDate: string;

  birthTime: string;

  calendar: "solar" | "lunar";

  createdAt: string;

}

export interface Order {

  id: string;

  customerId: string;

  amount: number;

  status: "pending" | "paid" | "rejected";

  createdAt: string;

}

export interface Chart {

  id: string;

  customerId: string;

  chart: unknown;

}

export const customers: Customer[] = [];

export const orders: Order[] = [];

export const charts: Chart[] = [];