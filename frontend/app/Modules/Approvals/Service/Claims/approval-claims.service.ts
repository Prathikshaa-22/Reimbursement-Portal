import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../../environments/environment';
 
@Injectable({
  providedIn: 'root'
})
export class ApprovalClaimsService {
 
  private apiUrl = `${environment.apiUrl}/approval`;
 
  constructor(private http: HttpClient) {}
 

  getClaims(managerId: number) {
    return this.http.get<any[]>(
      `${this.apiUrl}/pending?managerId=${managerId}`
    );
  }
 

  getClaimById(claimId: number) {
    return this.http.get<any>(
      `${this.apiUrl}/claim-by-id?claimId=${claimId}`
    );
  }
 

  takeAction(data: any) {
    return this.http.post(
      `${this.apiUrl}/action`,
      data
    );
  }
}
 