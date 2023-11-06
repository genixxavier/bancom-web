import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private isAuthenticated = new BehaviorSubject<boolean>(false);
  private sessionTimer: any;
  private sessionDuration = 15 * 60 * 1000;

  login() {
    this.isAuthenticated.next(true);
    this.startSessionTimer();
  }

  logout() {
    this.isAuthenticated.next(false);
    this.stopSessionTimer();
  }

  getIsAuthenticated() {
    return this.isAuthenticated.asObservable();
  }

  private startSessionTimer() {
    this.sessionTimer = setTimeout(() => {
      this.logout();
    }, this.sessionDuration);
  }

  private stopSessionTimer() {
    if (this.sessionTimer) {
      clearTimeout(this.sessionTimer);
    }
  }
}
