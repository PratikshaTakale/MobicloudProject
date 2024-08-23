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
    if (email === 'admin@gmail.com' && password === 'admin123') {
      this.userRole = UserRole.Admin;
    } else if (email === 'superuser@gmail.com' && password === 'super123') {
      this.userRole = UserRole.SuperUser;
    } else if (email === 'user@gmail.com' && password === 'user123') {
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
