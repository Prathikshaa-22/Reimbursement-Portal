import { ChangeDetectorRef, Component } from '@angular/core';
import { ApprovalClaimsService } from '../../../Service/Claims/approval-claims.service';
import { AuthService } from '../../../../Auth/Service/login.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';


 
@Component({
  selector: 'app-approval-claims',
  imports: [CommonModule],
  templateUrl: './approval-List.html',
  styleUrls: ['./approval-List.css']
})
export class ApprovalList {
 
  claims: any[] = [];
 
  constructor(
    private service: ApprovalClaimsService,
    private auth: AuthService,
    private router: Router,
    private cd: ChangeDetectorRef
  ) {}
 
  ngOnInit(): void {
    const user = this.auth.getUser();
 
    if (!user) return;
 
    this.service.getClaims(user.id).subscribe({
      next: (res: any[]) => {
        this.claims = res;
        this.cd.detectChanges(); 
      },
      error: (err) => {
        console.error('Error loading claims', err);
      }
    });
  }
 
  openDetails(id: number): void {
    this.router.navigate(['/app/approval/details', id]);
  }
}
 