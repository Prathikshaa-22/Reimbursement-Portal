import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
 
@Injectable({
  providedIn: 'root'
})
export class PreApprovalService {
 
  private apiUrl = `${environment.apiUrl}/preapproval`;
 
  constructor(private http: HttpClient) {}
 
  createPreApproval(data: any) {
    return this.http.post(`${this.apiUrl}/create`, data);
  }
 
  getAll(userId: number) {
    return this.http.get(`${this.apiUrl}/getall?userId=${userId}`);
  }
}