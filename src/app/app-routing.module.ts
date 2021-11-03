import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminGaurdGuard } from './admin-gaurd.guard';
import { AdminManageComponent } from './admin-manage/admin-manage.component';
import { AdminComponent } from './admin/admin.component';
import { AdmindeleteComponent } from './admindelete/admindelete.component';
import { AdmineditComponent } from './adminedit/adminedit.component';
import { AuthGuard } from './auth.guard';
import { HomeComponent } from './home/home.component';
import { NavicateGuard } from './navicate.guard';
import { ResolveGuard } from './resolve.guard';
import { SuperAdminGuard } from './super-admin.guard';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    canDeactivate:[NavicateGuard],

  },
  {
    path: 'admin',
    canActivate: [AdminGaurdGuard],
    children: [
      {
        path: '',
        component: AdminComponent,
      },
      {
        path: '',
        canActivateChild: [SuperAdminGuard],
        children: [
          { path: 'admin-manage', component: AdminManageComponent,
        resolve:{
          data:ResolveGuard
        } },
          { path: 'adminedit', component: AdmineditComponent },
          { path: 'admindelete', component: AdmindeleteComponent },
        ]
      }
    ]
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login/login.module').then(m => m.LoginModule),
    canActivate: [AuthGuard],
    
  },
  { path: 'settings', loadChildren: () => import('./users/users.module').then(m => m.UsersModule),canLoad:[AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
