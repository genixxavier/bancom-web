import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { tap } from 'rxjs';

export const authGuard: CanActivateFn = () => {
  const authService = inject(AuthenticationService);
  const router = inject(Router);

  return authService.getIsAuthenticated().pipe(
    tap((value) => {
      return !value ? router.navigate(['/login']) : true
    })
  );
};
