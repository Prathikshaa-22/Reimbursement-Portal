export interface ClaimsListItem {
  title: string;
  date: string;
  type: 'Claim' | 'Pre-Approval';
  status: string;
  comment?: string;
}