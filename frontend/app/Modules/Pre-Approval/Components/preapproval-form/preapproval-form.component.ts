import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
 
import { PreApprovalService } from '../../Service/pre-approval.service';
import { AuthService } from '../../../Auth/Service/login.service';
 
@Component({
  selector: 'app-preapproval-form',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './preapproval-form.html',
  styleUrls: ['./preapproval-form.css']
})
export class PreApprovalForm implements OnInit {
 
  preObj: any = {};
  submitted = false;
 
  constructor(
    private service: PreApprovalService,
    private authService: AuthService,
    private router: Router
  ) {}
 
  ngOnInit(): void {
    const user = this.authService.getUser();
 
    this.preObj = {
      userId: user?.id,
      title: '',
      category: '',
      estimatedAmount: '',
      justification: '',
      plannedDate: ''
    };
  }
 
 
  isInvalid(field: any): boolean {
    return this.submitted && (!field || field === '');
  }
 

  submit() {
 
    this.submitted = true;
 
    // ✅ validation
    if (
      !this.preObj.title ||
      !this.preObj.category ||
      !this.preObj.estimatedAmount ||
      !this.preObj.justification ||
      !this.preObj.plannedDate
    ) {
      return;
    }
 
    this.service.createPreApproval(this.preObj).subscribe({
      next: () => {
        alert('Pre-approval submitted successfully');
        this.router.navigate(['/app/claims']); // ✅ redirect
      },
      error: (err) => {
        console.error(err);
        alert('Error submitting');
      }
    });
  }
}