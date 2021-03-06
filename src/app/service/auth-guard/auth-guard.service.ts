import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate{

  constructor(private authService, AuthService, private router: Router) { }
}

canActivate(ActivatedRouteSnapshot, RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
  if(this.authService.isAuth) {
    return true;
  }
  this.router.navigate(['/auth'])
}