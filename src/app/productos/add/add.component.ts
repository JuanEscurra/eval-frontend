import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { filter, switchMap } from 'rxjs';
import Producto from 'src/app/models/producto.interface';
import { DialogConfirmDeleteComponent } from '../components/dialog-confirm-delete/dialog-confirm-delete.component';
import { ProductoService } from '../services/producto.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styles: [
    `
      .form-box {
        width: 50%;
        margin: 0 auto;
        padding: 20px;
        background-color: white;
      }
    `
  ]
})
export class AddComponent implements OnInit {

  producto: Producto = {
    nombre: '',
    precio: 1
  }

  constructor(private productoService: ProductoService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private dialog: MatDialog,
    private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    if(this.router.url.includes('edit')) {
      this.activatedRoute.params
        .pipe(
          switchMap(({id}) => this.productoService.getProducto(id))
        ).subscribe(producto => this.producto = producto);
    }
  }

  submit(): void {
    if(this.producto.id) {
      this.productoService.updateProducto(this.producto).subscribe((producto) => {
        this.router.navigate(['productos']);
        this.snackBar.open(`Se ha actualizado el producto ${producto.nombre}`, 'cerrar', {
          horizontalPosition: 'right',
          verticalPosition: 'bottom',
          duration: 3000
        });
      });
    } else {
      this.productoService.saveProducto(this.producto).subscribe((producto) => {
        this.router.navigate(['productos']);
        this.snackBar.open(`Se ha guardado el producto ${producto.nombre}`, 'cerrar', {
          horizontalPosition: 'right',
          verticalPosition: 'bottom',
          duration: 3000
        });
      });
    }
  }


  openDialog(): void {
    const dialog = this.dialog.open(DialogConfirmDeleteComponent, {
      width: 'max(350px, 35%)',
      data: {...this.producto}
    });

    dialog.afterClosed()
      .pipe(
        filter(result => !!result),
        switchMap(() => this.productoService.deleteProducto(this.producto.id!))
      ).subscribe(() => {
        this.router.navigate(['productos']);
        this.snackBar.open(`Se ha eliminado el producto ${this.producto.nombre}`, 'cerrar', {
          horizontalPosition: 'right',
          verticalPosition: 'bottom',
          duration: 3000
        });
      });
  }
}
