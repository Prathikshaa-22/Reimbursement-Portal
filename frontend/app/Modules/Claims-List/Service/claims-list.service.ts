import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
 
@Injectable({
  providedIn: 'root'
})
export class ClaimsListService {
 
  private claimUrl = `${environment.apiUrl}/claim`;
  private preUrl = `${environment.apiUrl}/preapproval`;
 
  constructor(private http: HttpClient) {}

  getClaims(userId: number) {
    return this.http.get<any[]>(`${this.claimUrl}/getall?userId=${userId}`);
  }
 
 
  getPreApprovals(userId: number) {
    return this.http.get<any[]>(`${this.preUrl}/getall?userId=${userId}`);
  }
}
 