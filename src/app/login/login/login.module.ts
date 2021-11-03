import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { ListComponent } from '../list/list.component';
import { FormComponent } from '../form/form.component';
import { LayoutComponent } from '../layout/layout.component';
import { EditComponent } from '../edit/edit.component';


@NgModule({
  declarations: [
    ListComponent,
    FormComponent,
    LayoutComponent,
    EditComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule
  ]
})
export class LoginModule { }
