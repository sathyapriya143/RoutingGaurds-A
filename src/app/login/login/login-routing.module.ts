import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResolveGuard } from 'src/app/resolve.guard';
import { SuperAdminGuard } from 'src/app/super-admin.guard';
import { EditComponent } from '../edit/edit.component';
import { FormComponent } from '../form/form.component';
import { LayoutComponent } from '../layout/layout.component';
import { ListComponent } from '../list/list.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    canActivateChild:[SuperAdminGuard]
  },
  {
    path: 'list',
    component: ListComponent,
 
  },
  {
    path: 'form',
    component: FormComponent
  },
  {
    path: 'edit',
    component: EditComponent
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
