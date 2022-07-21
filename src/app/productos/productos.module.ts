import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductosRoutingModule } from './productos-routing.module';
import { HomeComponent } from './home/home.component';
import { MaterialModule } from '../material/material.module';
import { AddComponent } from './add/add.component';
import { FlexModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { DialogConfirmDeleteComponent } from './components/dialog-confirm-delete/dialog-confirm-delete.component';


@NgModule({
  declarations: [
    HomeComponent,
    AddComponent,
    DialogConfirmDeleteComponent
  ],
  imports: [
    CommonModule,
    ProductosRoutingModule,
    MaterialModule,
    FlexModule,
    RouterModule,
    FormsModule
  ]
})
export class ProductosModule { }
