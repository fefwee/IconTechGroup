import {
  ActivatedRouteSnapshot,
  CanActivateFn,
  Router,
  RouterStateSnapshot,
  UrlTree
} from '@angular/router';
import { Observable } from 'rxjs';

export const AuthGuard: CanActivateFn =
  (route: ActivatedRouteSnapshot, state: RouterStateSnapshot): | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree => {
    const role = localStorage.getItem('role');
      if(role === 'admin'){
        return true
      }
      else{
        return false
      }

  };