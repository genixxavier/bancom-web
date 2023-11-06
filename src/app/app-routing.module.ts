import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './modules/auth/login/login.component';
import { authGuard } from './core/guards/auth.guard';

const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('./modules/pages/pages.module').then(m => m.PagesModule),
    },
    {
        path: 'login',
        component: LoginComponent,
    },
    {
        path: 'admin',
        canActivate: [authGuard],
        loadChildren: () => import('./modules/admin/admin-routing.module').then(m => m.AdminRoutingModule),
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
