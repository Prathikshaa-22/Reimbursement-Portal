import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { LoginRequest } from '../Model/login.model';
 
@Injectable({
  providedIn: 'root'
})
export class AuthService {
 
  private baseUrl = environment.apiUrl;
 
  constructor(private http: HttpClient) {}

  login(obj: LoginRequest): Observable<any> {
    return this.http.post(`${this.baseUrl}/auth/login`, obj);
  }
 
  
  saveUser(user: any): void {
    if (typeof window !== 'undefined') {
      localStorage.setItem('user', JSON.stringify(user));
    }
  }
 

  getUser(): any {
 
    if (typeof window !== 'undefined') {
      const user = localStorage.getItem('user');
      return user ? JSON.parse(user) : null;
    }
 
    return null;
  }
 
  
  logout(): void {
    
      localStorage.removeItem('user');
    
  }
}
 