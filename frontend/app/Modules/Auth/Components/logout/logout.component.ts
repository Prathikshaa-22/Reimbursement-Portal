import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../Service/login.service';
 
@Component({
  selector: 'app-logout',
  standalone: true,
  template: '' // ❗ no HTML needed
})
export class LogoutComponent implements OnInit {
 
  constructor(
    private auth: AuthService,
    private router: Router
  ) {}
 
  ngOnInit(): void {
    this.auth.logout();
 
    // redirect to login
    this.router.navigate(['/'], { replaceUrl: true });
  }
}
 