import { Component } from '@angular/core';
import { Router } from '@angular/router';
 
import { ApprovalDashboardService } from '../../Service/Dashboard/dashboard.service';
import { ApprovalPreService } from '../../Service/Pre-Approvals/approval-pre.service';
import { AuthService } from '../../../Auth/Service/login.service';
 
@Component({
  selector: 'app-approval-dashboard',
  templateUrl: './approval-dashboard.html',
  styleUrls: ['./approval-dashboard.css']
})
export class ApprovalDashboardComponent {
 
  claimCount: number = 0;
  preCount: number = 0;
  historyCount: number = 0;
 
  constructor(
    private dashboardService: ApprovalDashboardService,
    private preService: ApprovalPreService,
    private auth: AuthService,
    private router: Router
  ) {}
 
  ngOnInit(): void {
 
    const user = this.auth.getUser();
 
    console.log("USER:", user); // 🔥 DEBUG
 
    if (!user) return;
 
   
    this.dashboardService.getClaimPending(user.id).subscribe({
      next: (res: any[]) => {
        console.log("CLAIMS:", res); // DEBUG
        this.claimCount = res?.length || 0;
      },
      error: (err) => {
        console.error('Error fetching claims', err);
        this.claimCount = 0;
      }
    });

    this.preService.getPreApprovals(user.id).subscribe({
      next: (res: any[]) => {
        console.log("PRE:", res); // DEBUG
        this.preCount = res?.length || 0;
      },
      error: (err) => {
        console.error('Error fetching pre approvals', err);
        this.preCount = 0;
      }
    });
 

    this.dashboardService.getHistory(user.id).subscribe({
      next: (res: any[]) => {
        console.log("HISTORY:", res); // DEBUG
        this.historyCount = res?.length || 0;
      },
      error: (err) => {
        console.error('Error fetching history', err);
        this.historyCount = 0;
      }
    });
  }
 

  goToClaims(): void {
    this.router.navigate(['/app/approval/claims']);
  }
 
  goToPreApprovals(): void {
    this.router.navigate(['/app/approval/pre']);
  }
 
  goToHistory(): void {
    this.router.navigate(['/app/approval/history']);
  }
}
 