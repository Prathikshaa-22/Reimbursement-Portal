import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../../environments/environment';
 
@Injectable({
  providedIn: 'root'
})
export class ApprovalDashboardService {
 
  private claimUrl = `${environment.apiUrl}/approval`;
  private preUrl = `${environment.apiUrl}/preapproval`;
 
  constructor(private http: HttpClient) {}
 

  getClaimPending(managerId: number) {
    return this.http.get<any[]>(`${this.claimUrl}/pending?managerId=${managerId}`);
  }
 

  getPrePending(managerId: number) {
    return this.http.get<any[]>(`${this.preUrl}/pending-by-manager?managerId=${managerId}`);
  }
 
 
  getHistory(managerId: number) {
    return this.http.get<any[]>(`${this.claimUrl}/history-by-manager?managerId=${managerId}`);
  }
}