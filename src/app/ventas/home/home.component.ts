import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDateRangePicker } from '@angular/material/datepicker';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

import { DetalleVenta, Venta } from 'src/app/models/venta.interface';
import { DialogDetallesComponent } from '../components/dialog-detalles/dialog-detalles.component';
import { VentasService } from '../services/ventas.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: [
    './home.component.scss'
  ]
})
export class HomeComponent implements OnInit {

  date = {
    dateStart: '',
    dateEnd: ''
  }

  @ViewChild('picker') picker!: MatDateRangePicker<Date>;
  @ViewChild(MatPaginator) paginator !: MatPaginator;
  dataSource = new MatTableDataSource<Venta>([]);
  
  displayedColumns: string[] = ['cliente.nombres', 'fecha', 'total', 'acciones'];
  pageSizeOptions: number[] = [1, 2, 5, 10];
  length !: number;

  constructor(private ventasService: VentasService,
    public dialog: MatDialog) {}


  ngOnInit(): void {
    this.ventasService.getVentas(0,5).subscribe(page => {
      this.dataSource.paginator = this.paginator;
      this.dataSource = new MatTableDataSource(page.content);
      this.length = page.totalElements;
    });
  }

  mostrarMas(e: PageEvent) {
    if(this.date.dateEnd && this.date.dateStart) {
      this.ventasService
        .getVentasByRangeDate(new Date(this.date.dateStart), new Date(this.date.dateEnd), e.pageIndex, e.pageSize)
        .subscribe(page => {
          this.dataSource = new MatTableDataSource(page.content);
          this.length = page.totalElements;
        });
    } else {
      this.ventasService.getVentas(e.pageIndex, e.pageSize).subscribe(page => {
        this.dataSource.data = page.content;
        this.length = page.totalElements;
      });
    }
    
  }

  openDialog(id: number): void {
    const dialogRef = this.dialog.open(DialogDetallesComponent, {
      width: 'max(70%, 350px)',
      data: id
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('result: ', result);
    });
  }


  search(): void {
    console.log(this.date);
    this.paginator.pageIndex = 0;
    this.ventasService.getVentasByRangeDate(
      new Date(this.date.dateStart), new Date(this.date.dateEnd),
      this.paginator.pageIndex, this.paginator.pageSize)
      .subscribe(page => {
        this.dataSource = new MatTableDataSource(page.content);
        this.length = page.totalElements;
      });
  }



  calcularTotal(detallesVenta: DetalleVenta[]): number | undefined {
    //console.log(detallesVenta);
    return detallesVenta.length > 0
      ? detallesVenta
        .map(detalleVenta => detalleVenta.cantidad * detalleVenta.producto.precio)
        .reduce((a,b) => a + b)
      : 0;
  }
}
