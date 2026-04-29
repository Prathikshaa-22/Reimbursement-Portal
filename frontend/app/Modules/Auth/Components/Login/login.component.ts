import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../Service/login.service';
import { LoginRequest } from '../../Model/login.model';
 
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
 
  // 🔷 Model for form binding
  loginObj: LoginRequest = {
    email: '',
    password: ''
  };
 
  constructor(
    private authService: AuthService,
    private router: Router
  ) {}
 

  login() {
    console.log('sending obj:', this.loginObj);
    this.authService.login(this.loginObj).subscribe({
      next: (res) => {
        console.log('Login Response:', res); // 🔥 debug
        
       
        this.authService.saveUser(res.user);
 
      
        this.router.navigate(['/app']);
      },
      error: (err) => {
        console.error(err);
 
       
        if (err.error) {
          console.error('Error message from backend:', err.error); // 🔥 debug
          alert(err.error?.message||JSON.stringify(err.error)); // shows "User not found" / "Invalid password"
        } else {
          alert('Login failed');
        }
      }
    });
  }
}
 