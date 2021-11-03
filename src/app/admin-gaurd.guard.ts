import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminGaurdGuard implements CanActivate {
  userToken = true;
  canActivate() {

    if (this.userToken ) {
      return true;
    } else {
      return false;
    }
  }
}
