import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../../environments/environment';
 
@Injectable({
  providedIn: 'root'
})
export class ApprovalPreService {
 
  private apiUrl = `${environment.apiUrl}/approval`;
 
  constructor(private http: HttpClient) {}
 

  getPreApprovals(managerId: number) {
    return this.http.get<any[]>(
      `${this.apiUrl}/pre-pending?managerId=${managerId}`
    );
  }
 

  getPreById(id: number) {
    return this.http.get<any>(
      `${this.apiUrl}/pre-by-id?id=${id}`
    );
  }

  takeAction(data: any) {
    return this.http.post(
      `${this.apiUrl}/pre-action`,
      data
    );
  }
}
 