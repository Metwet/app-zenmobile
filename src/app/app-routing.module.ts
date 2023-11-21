import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', loadChildren: () => import('app/home/home.module').then(m => m.HomeModule), canActivate: [AuthGuard] },
    { path: 'inventory', loadChildren: () => import('app/inventory/inventory.module').then(m => m.InventoryModule), canActivate: [AuthGuard] },
    { path: 'reports', loadChildren: () => import('app/reports/reports.module').then(m => m.ReportsModule), canActivate: [AuthGuard] },
    { path: 'billing', loadChildren: () => import('app/billing/billing.module').then(m => m.BillingModule), canActivate: [AuthGuard] },
    { path: 'profile', loadChildren: () => import('app/profile/profile.module').then(m => m.ProfileModule), canActivate: [AuthGuard] },
    { path: 'auth', loadChildren: () => import('app/auth/auth.module').then(m => m.AuthModule) },
    { path: 'editprofile', component: EditProfileComponent, canActivate: [AuthGuard]}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
