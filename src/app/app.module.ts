import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './modules/auth/login/login.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { NgOptimizedImage } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    declarations: [AppComponent, LoginComponent],
    imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule, MatFormFieldModule, MatIconModule, MatInputModule, MatCheckboxModule, MatButtonModule, ReactiveFormsModule, NgOptimizedImage, HttpClientModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
