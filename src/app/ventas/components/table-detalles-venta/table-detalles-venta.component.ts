import { Component, Input } from '@angular/core';
import { DetalleVenta } from 'src/app/models/venta.interface';

@Component({
  selector: 'app-table-detalles-venta',
  templateUrl: './table-detalles-venta.component.html',
  styles: [
    `
      table {
        width: 100%;
        margin: 15px 0;
      }
    `
  ]
})
export class TableDetallesVentaComponent {

  @Input() detallesVenta!: DetalleVenta[];
  displayedColumns: string[] = ['producto.nombre', 'producto.precio', 'cantidad', 'subtotal'];


}
