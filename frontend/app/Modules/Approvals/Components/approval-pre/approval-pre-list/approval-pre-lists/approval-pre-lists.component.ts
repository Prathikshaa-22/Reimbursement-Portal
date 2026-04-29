import { Component, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
 
import { ApprovalPreService } from '../../../../Service/Pre-Approvals/approval-pre.service';
import { AuthService } from '../../../../../Auth/Service/login.service';
 
@Component({
  selector: 'app-approval-pre-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './approval-pre-lists.html',
  styleUrls: ['./approval-pre-lists.css']
})
export class ApprovalPreListComponent {
 
  preList: any[] = [];
 
  constructor(
    private service: ApprovalPreService,
    private auth: AuthService,
    private router: Router,
    private cd: ChangeDetectorRef
  ) {}
 
  ngOnInit(): void {
    const user = this.auth.getUser();
 
    if (!user) return;
 
    this.service.getPreApprovals(user.id).subscribe({
      next: (res: any[]) => {
        this.preList = res;
        this.cd.detectChanges(); // ✅ avoids NG0100
      },
      error: (err) => {
        console.error('Error loading pre-approvals', err);
      }
    });
  }
 
  openDetails(id: number): void {
    this.router.navigate(['/app/approval/pre-details', id]);
  }
}
 