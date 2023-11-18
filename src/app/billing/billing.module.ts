import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BillingPageComponent } from './billing-page/billing-page.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from 'shared';

const routes: Routes = [
  { path: '', component: BillingPageComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    BillingPageComponent
  ],
  imports: [
    HttpClientModule,
    SharedModule,
    RouterModule.forChild(routes),
    CommonModule
  ]
})
export class BillingModule { }
