import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Venta } from 'src/app/models/venta.interface';
import { VentasService } from '../../services/ventas.service';

@Component({
  selector: 'app-dialog-detalles',
  templateUrl: './dialog-detalles.component.html',
  styleUrls: [
    './dialog-detalles.component.scss'
  ]
})
export class DialogDetallesComponent implements OnInit {

  venta!: Venta;
  
  constructor(
    public dialogRef: MatDialogRef<DialogDetallesComponent>,
    @Inject(MAT_DIALOG_DATA) public id: number,
    private ventaService: VentasService
  ) { }


  ngOnInit(): void {
    this.ventaService.getVenta(this.id).subscribe(venta => this.venta = venta);
  }

  cerrar(): void {
    this.dialogRef.close();
  }

  calcularTotal(): number | undefined {
    return this.venta.detallesVenta.length > 0
      ? this.venta.detallesVenta
        .map(detalleVenta => detalleVenta.cantidad * detalleVenta.producto.precio)
        .reduce((a,b) => a + b)
      : 0;
  }
  
}

