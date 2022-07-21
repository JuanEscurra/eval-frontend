import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import Producto from 'src/app/models/producto.interface';
import { ProductoService } from '../services/producto.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: [
    './home.component.scss'
  ]
})
export class HomeComponent implements OnInit {

  @ViewChild(MatPaginator) paginator !: MatPaginator;
  dataSource = new MatTableDataSource<Producto>([]);
  length !: number;


  displayedColumns: string[] = ['nombre', 'precio', 'acciones'];
  pageSizeOptions: number[] = [1, 2, 5, 10];


  constructor(private productoService: ProductoService) { }

  ngOnInit(): void {
    this.productoService.getProductos(0, 5).subscribe(page => {
      this.dataSource.paginator = this.paginator;
      this.dataSource = new MatTableDataSource(page.content);
      this.length = page.totalElements;
    });
  }

  mostrarMas(e: PageEvent): void {
    this.productoService.getProductos(e.pageIndex, e.pageSize).subscribe(page => {
      this.dataSource = new MatTableDataSource(page.content);
      this.length = page.totalElements;
    });
  }

}
