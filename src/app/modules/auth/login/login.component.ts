import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from '../../../core/services/authentication.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
    hide = true;
    loginForm: FormGroup;

    constructor(
        private readonly fb: FormBuilder,
        private readonly _authServ: AuthenticationService,
        private readonly _route: Router
    ) {
        this.loginForm = this.fb.group({
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required]],
        });
    }

    login() {
        this._authServ.login();
        this._route.navigate(['/admin']);
    }
}
