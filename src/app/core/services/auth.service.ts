import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private router: Router) {}

  login(email: string, password: string): boolean {
    // Perform actual login validation here
    if (email === 'dulal@gmail.com' && password === '123') {
      sessionStorage.setItem('isLoggedIn', 'true');
      return true;
    } else {
      return false;
    }
  }

  logout(): void {
    sessionStorage.removeItem('isLoggedIn');
    this.router.navigate(['/auth/login']);
  }

  isLoggedIn(): boolean {
    return sessionStorage.getItem('isLoggedIn') === 'true';
  }
}
