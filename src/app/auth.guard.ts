import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from './auth.service';
import { UserRole } from './user-role';

export const authGuard: CanActivateFn = (route, state) => {
  
  const authService = inject(AuthService);
  const router = inject(Router);

  const expectedRole = route.data['role'] as UserRole;
  const currentRole = authService.getRole();

  if (currentRole && currentRole === expectedRole) {
    return true;
  } else {
    router.navigate(['/login']);
    return false;
  }
};
