import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VentasRoutingModule } from './ventas-routing.module';
import { HomeComponent } from './home/home.component';
import { MaterialModule } from '../material/material.module';
import { DialogDetallesComponent } from './components/dialog-detalles/dialog-detalles.component';
import { FlexModule } from '@angular/flex-layout';
import { TableDetallesVentaComponent } from './components/table-detalles-venta/table-detalles-venta.component';
import { InfoClienteComponent } from './components/info-cliente/info-cliente.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    HomeComponent,
    DialogDetallesComponent,
    TableDetallesVentaComponent,
    InfoClienteComponent
  ],
  imports: [
    CommonModule,
    VentasRoutingModule,
    MaterialModule,
    FlexModule,
    FormsModule
  ]
})
export class VentasModule { }
