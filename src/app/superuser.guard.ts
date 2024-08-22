import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from './auth.service';
import { UserRole } from './user-role';

export const superuserGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  const expectedRole = UserRole.SuperUser;
  const currentRole = authService.getRole();

  if (currentRole === expectedRole) {
    return true;
  } else {
    router.navigate(['/login']);
    return false;
  }
};
