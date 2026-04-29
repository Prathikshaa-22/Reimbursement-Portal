import { Routes } from '@angular/router';
 
export const auth_routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./Components/Login/login.component')
        .then(m => m.Login)
  }
];
 