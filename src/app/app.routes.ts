import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { NgModule } from '@angular/core';
import { authGuard } from './auth.guard';
import { UserRole } from './user-role';
import { PayrollComponent } from './payroll/payroll.component';
import { SuperuserDashboardComponent } from './superuser-dashboard/superuser-dashboard.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { superuserGuard } from './superuser.guard';
import { userGuard } from './user.guard';


  export const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'admin', component: AdminDashboardComponent, canActivate: [authGuard], data: { role: UserRole.Admin } },
    { path: 'superuser-dashboard', component: SuperuserDashboardComponent, canActivate: [superuserGuard] },
    { path: 'user-dashboard', component: UserDashboardComponent, canActivate: [userGuard] },
    { path: 'payroll', component: PayrollComponent},
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: '**', redirectTo: '/login' },
  ];
  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }