import { ChangeDetectorRef, Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
 
import { ApprovalClaimsService } from '../../../Service/Claims/approval-claims.service';
import { AuthService } from '../../../../Auth/Service/login.service';
 
@Component({
  selector: 'app-approval-details',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './approval-details.html',
  styleUrls: ['./approval-details.css']
})
export class ApprovalDetails {
 
  claim: any;
 
  showRejectBox: boolean = false;
  comment: string = '';
 
  constructor(
    private route: ActivatedRoute,
    private service: ApprovalClaimsService,
    private auth: AuthService,
    private router: Router,
    private cdr: ChangeDetectorRef
  ) {}
 

  ngOnInit(): void {
 
    const id = this.route.snapshot.paramMap.get('id');
 
    console.log("ID:", id);
 
    if (!id) return;
 
    this.service.getClaimById(+id).subscribe({
      next: (res) => {
        console.log("CLAIM DATA:", res);
        this.claim = res;  
        
        setTimeout(() => {
          this.claim = res; 
          this.cdr.detectChanges();
        }, 0);
      },
      error: (err) => {
        console.error('Error loading claim details', err);
      }
    });
  }
 

  takeAction(action: string): void {
 
    const user = this.auth.getUser();
    if (!user) return;
 
    if (action === 'Rejected') {
      this.showRejectBox = true;
      return;
    }
 
    const data = {
      claimId: this.claim.claimId,
      managerId: user.id,
      action: 'Approved',
      comment: 'Approved'
    };
 
    this.submitAction(data);
  }
 

  submitReject(): void {
 
    const user = this.auth.getUser();
 
    if (!this.comment.trim()) {
      alert("Please enter rejection reason");
      return;
    }
 
    const data = {
      claimId: this.claim.claimId,
      managerId: user.id,
      action: 'Rejected',
      comment: this.comment
    };
 
    this.submitAction(data);
  }
 

  submitAction(data: any): void {
    this.service.takeAction(data).subscribe({
      next: () => {
        alert(`${data.action} successful`);
        this.router.navigate(['/app/approval/claims']);
      },
      error: (err) => {
        console.error('Error updating claim', err);
      }
    });
  }
}