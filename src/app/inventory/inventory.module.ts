import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InventoryPageComponent } from './inventory-page/inventory-page.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'shared';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
  { path: '', component: InventoryPageComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }
]

@NgModule({
  declarations: [
    InventoryPageComponent
  ],
  imports: [
    HttpClientModule,
    SharedModule,
    RouterModule.forChild(routes),
    CommonModule
  ]
})
export class InventoryModule { }
