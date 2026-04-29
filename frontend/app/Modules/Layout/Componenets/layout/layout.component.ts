// import { Component } from '@angular/core';
// import { Router } from '@angular/router';
// import { NgIf, NgClass } from '@angular/common';
// import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
// import { AuthService } from '../../../Auth/Service/login.service';
 
// @Component({
//   selector: 'app-layout',
//   standalone: true,
//   imports: [NgIf, NgClass, RouterOutlet, RouterLink, RouterLinkActive],
//   templateUrl: './layout.html',
//   styleUrls: ['./layout.css']
// })
// export class Layout {
 
//   user: any;
//   isSidebarClosed = false;
 
//   constructor(
//     private authService: AuthService,
//     private router: Router
//   ) {}
 
//   ngOnInit() {
//     this.user = this.authService.getUser();
 
//     // 🔥 default landing → claims
//     this.router.navigate(['/app/claims']);
//   }
 
//   toggleSidebar() {
//     this.isSidebarClosed = !this.isSidebarClosed;
//   }
 
//   logout() {
//     this.authService.logout();
//     this.router.navigate(['/auth']);
//   }
 
//   // 🔥 role check
//   isManager() {
//     return this.user?.role === 'Manager' || this.user?.role === 'SeniorManager';
//   }
// }
 
import { Component, OnInit } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { AuthService } from '../../../Auth/Service/login.service';
import { NgClass, NgIf } from '@angular/common';
 
@Component({
  selector: 'app-layout',
  standalone: true,
   imports: [NgIf, NgClass, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './layout.html',
  styleUrls: ['./layout.css']
})
export class LayoutComponent implements OnInit {
 
  user: any;
  isSidebarClosed = false;
 
  constructor(
    private authService: AuthService,
    private router: Router
  ) {}
 
  ngOnInit() {
    this.user = this.authService.getUser();
 
  
    if (!this.user) {
      this.router.navigate(['/login']); 
    }
  }
 

  toggleSidebar() {
    this.isSidebarClosed = !this.isSidebarClosed;
  }
 
  
  logout() {
    
    const confirmLogout = confirm('Are you sure you want to logout?');
    if (!confirmLogout) {
      return; 
    }

    this.router.navigate(['/app/logout']); 
  }
 

  isManager() {
    return this.user?.role === 'Manager' || this.user?.role === 'SeniorManager';
  }
}
 