
 
export interface Claim {
  claimId?: number;
  userId: number;
  claimTitle: string;
  category: string;
  expenseDate?: string;
  fromDate?: string;
  toDate?: string;
  totalAmount: number;
  description: string;
  paymentMethod: string;
  invoices: Invoice[];
}

export interface Invoice {
  invoiceNumber: string;
  vendorName: string;
  invoiceDate: string;
  invoiceAmount: number;
  file: File | null;
}