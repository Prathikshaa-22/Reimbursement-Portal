import { Routes } from '@angular/router';
 
export const layout_routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./Componenets/layout/layout.component')
        .then(m => m.LayoutComponent),
 
    children: [
 
      // DEFAULT
      {
        path: '',
        redirectTo: 'claims',
        pathMatch: 'full'
      },
 
      // CLAIMS
      {
        path: 'claims',
        loadComponent: () =>
          import('../Claims-List/Components/claims-list/claims-list.component')
            .then(m => m.ClaimsListComponent)
      },
 
      // NEW CLAIM
      {
        path: 'new-claim',
        loadComponent: () =>
          import('../Claims/Components/claim-form/claim-form.component')
            .then(m => m.ClaimForm)
      },
 
      // EDIT CLAIM
      {
        path: 'edit-claim/:id',
        loadComponent: () =>
          import('../Claims/Components/claim-form/claim-form.component')
            .then(m => m.ClaimForm)
      },
 
      // PRE-APPROVAL
      {
        path: 'pre-approval',
        loadComponent: () =>
          import('../Pre-Approval/Components/preapproval-form/preapproval-form.component')
            .then(m => m.PreApprovalForm)
      },
 
   // APPROVALS (Manager)
{
  path: 'approval',
  children: [
 
    // Dashboard
    {
      path: '',
      loadComponent: () =>
        import('../Approvals/Components/approval-dashboard/approval-dashboard.component')
        .then(m => m.ApprovalDashboardComponent)
    },
 
    // Claims List
    {
      path: 'claims',
      loadComponent: () =>
        import('../Approvals/Components/approval-claims/approval-list/approval-list.component')
        .then(m => m.ApprovalList)
    },
 
    // Claim Details
    {
      path: 'details/:id',
      loadComponent: () =>
        import('../Approvals/Components/approval-claims/approval-details/approval-details.component')
        .then(m => m.ApprovalDetails)
    },
     // PRE LIST
    {
      path: 'pre',
      loadComponent: () =>
        import('../Approvals/Components/approval-pre/approval-pre-list/approval-pre-lists/approval-pre-lists.component')
        .then(m => m.ApprovalPreListComponent)
    },
 
    // PRE DETAILS
    {
      path: 'pre-details/:id',
      loadComponent: () =>
        import('../Approvals/Components/approval-pre/approval-pre-list/approval-pre-details/approval-pre-details.component')
        .then(m => m.ApprovalPreDetailsComponent)
    }
 
 
  ]
}
 ,
 
      // LOGOUT
      {
        path: 'logout',
        loadComponent: () =>
          import('../Auth/Components/logout/logout.component')
            .then(m => m.LogoutComponent)
      }
 
    ]
  }
];
 