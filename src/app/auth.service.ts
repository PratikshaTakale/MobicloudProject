import { Injectable } from '@angular/core';
import { UserRole } from './user-role';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private userRole: UserRole | null = null;

  constructor() {}

  login(email: string, password: string): boolean {
    // Dummy login logic, replace with real API call
    if (email === 'admin@example.com' && password === 'password') {
      this.userRole = UserRole.Admin;
    } else if (email === 'superuser@example.com' && password === 'password') {
      this.userRole = UserRole.SuperUser;
    } else if (email === 'user@example.com' && password === 'password') {
      this.userRole = UserRole.User;
    } else {
      return false;
    }
    return true;
  }

  getRole(): UserRole | null {
    return this.userRole;
  }

  isAuthenticated(): boolean {
    return this.userRole !== null;
  }

  logout(): void {
    this.userRole = null;
  }
}
