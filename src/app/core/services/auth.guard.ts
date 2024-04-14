// auth.guard.ts
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): boolean {
    if (this.authService.isLoggedIn()) {
      return true;
    } else {
      this.router.navigate(['/auth/login']);
      return false;
    }
  }
}

// export const authGuard: CanActivateFn = (route, state) => {
//   const _router = inject(Router);
//   let isloggedIn = sessionStorage.getItem('isLgggedIn');

//   if (isloggedIn == null || isloggedIn == 'false') {
//     _router.navigate(['auth/sign-up']);
//     return false;
//   }
//   return true;
// };