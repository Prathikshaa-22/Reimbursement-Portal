import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
 
import { ApprovalPreService } from '../../../../Service/Pre-Approvals/approval-pre.service';
import { AuthService } from '../../../../../Auth/Service/login.service';
 
@Component({
  selector: 'app-approval-pre-details',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './approval-pre-details.html',
  styleUrls: ['./approval-pre-details.css']
})
export class ApprovalPreDetailsComponent {
 
  pre: any;
 
  constructor(
    private route: ActivatedRoute,
    private service: ApprovalPreService,
    private auth: AuthService,
    private router: Router
  ) {}
 
  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
 
    if (!id) return;
 
    this.service.getPreById(+id).subscribe({
      next: (res: any) => {
        this.pre = res;
      },
      error: (err) => {
        console.error('Error loading pre-approval details', err);
      }
    });
  }
 
  takeAction(action: string): void {
    const user = this.auth.getUser();
 
    const data = {
      claimId: this.pre.preApprovalId,  
      managerId: user.id,
      action: action,
      comment: action
    };
 
    this.service.takeAction(data).subscribe({
      next: () => {
        alert(`Pre-Approval ${action} successfully`);
        this.router.navigate(['/app/approval/pre']);
      },
      error: (err) => {
        console.error('Error updating pre-approval', err);
      }
    });
  }
}
 