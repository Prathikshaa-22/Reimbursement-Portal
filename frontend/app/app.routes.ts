import { Routes } from '@angular/router';

export const routes: Routes = [


  {
    path: '',
    loadChildren: () =>
      import('./Modules/Auth/auth.routes')
        .then(m => m.auth_routes)
  },
 
 
  {
    path: 'app',
    loadChildren: () =>
      import('./Modules/Layout/layout.routes')
        .then(m => m.layout_routes)
  }
 
];
 

