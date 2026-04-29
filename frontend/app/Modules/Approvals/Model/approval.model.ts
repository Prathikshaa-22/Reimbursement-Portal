// Request for approve/reject
export interface ApprovalRequest {
  claimId: number;
  managerId: number;
  action: string;   // "Approved" | "Rejected"
  comment: string;
}
 
// Claim response (from backend)
export interface Claim {
  claimId: number;
  claimTitle: string;
  category: string;
  expenseDate: string;
  totalAmount: number;
  description: string;
  status: string;
  userId: number;
}