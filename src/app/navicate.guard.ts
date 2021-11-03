import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './home/home.component';
import { LayoutComponent } from './login/layout/layout.component';

@Injectable({
  providedIn: 'root'
})
export class NavicateGuard implements CanDeactivate<HomeComponent> {
  canDeactivate(
    component:HomeComponent )
    { if(component.isDirty){
      return window.confirm('sure you want to leave this page?')
    }
    return true;
  }
  
}
