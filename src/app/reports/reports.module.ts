import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportsPageComponent } from './reports-page/reports-page.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'shared';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
  { path: '', component: ReportsPageComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    ReportsPageComponent
  ],
  imports: [
    HttpClientModule,
    SharedModule,
    RouterModule.forChild(routes),
    CommonModule
  ]
})
export class ReportsModule { }
