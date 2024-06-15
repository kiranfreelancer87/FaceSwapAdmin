// Angular Import
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// project import
import { AdminComponent } from './theme/layout/admin/admin.component';
import { LoginComponent } from './demo/auth/login/login.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
      },
      {
        path: 'dashboard',
        loadChildren: () => import('./demo/dashboard/dashboard.module').then((m) => m.DashboardModule)
      },
      {
        path: 'auth',
        loadChildren: () => import('./demo/auth/auth.module').then((m) => m.AuthModule)
      },
      {
        path: 'master',
        loadChildren: () => import('./demo/master/master.module').then((m) => m.MasterModule)
      },
    ]
  },
  {
    path: '**', // Handle unknown routes
    redirectTo: '/login'
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
