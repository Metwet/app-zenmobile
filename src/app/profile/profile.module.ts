import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from 'shared';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: ProfilePageComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    ProfilePageComponent
  ],
  imports: [
    HttpClientModule,
    SharedModule,
    RouterModule.forChild(routes),
    CommonModule
  ]
})
export class ProfileModule { }
