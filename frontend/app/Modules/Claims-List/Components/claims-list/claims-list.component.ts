import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClaimsListService } from '../../Service/claims-list.service';
import { AuthService } from '../../../Auth/Service/login.service';
 
@Component({
  selector: 'app-claims-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './claims-list.html',
  styleUrls: ['./claims-list.css']
})
export class ClaimsListComponent implements OnInit {
 
  list: any[] = [];
  loading = true;
 
  constructor(
    private service: ClaimsListService,
    private auth: AuthService,
    private cdr: ChangeDetectorRef // ✅ FIX
  ) {}
 
  ngOnInit(): void {
 
    const user = this.auth.getUser();
 
    Promise.all([
      this.service.getClaims(user.id).toPromise(),
      this.service.getPreApprovals(user.id).toPromise()
    ])
    .then(([claims, pres]) => {
 
      const claimList = (claims || []).map((c: any) => ({
        title: c.claimTitle,
        date: c.createdDate,
        type: 'Claim',
        status: c.status,
        comment: c.managerComment
      }));
 
      const preList = (pres || []).map((p: any) => ({
        title: p.title,
        date: p.createdDate,
        type: 'Pre-Approval',
        status: p.status,
        comment: p.managerComment
      }));
 
     
      this.list = [...claimList, ...preList].sort(
        (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
      );
 
      this.loading = false;
 

      this.cdr.detectChanges();
    })
    .catch(err => {
      console.error(err);
      this.loading = false;
    });
  }
 
 
  getStatus(item: any): string {
    if (item.status === 'Approved') return 'Approved';
 
    if (item.status === 'Rejected') {
      return item.comment
        ? `Rejected (${item.comment})`
        : 'Rejected';
    }
 
    return 'Pending';
  }
}
 