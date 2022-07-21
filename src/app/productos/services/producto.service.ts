import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import Page from 'src/app/models/page.interface';
import Producto from 'src/app/models/producto.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  url: string = `${environment.url}/productos`

  constructor(private httpClient: HttpClient) { }


  getProductos(page: number = 0, size: number = 5): Observable<Page<Producto>> {
    return this.httpClient.get<Page<Producto>>(this.url, {
      params: {
        page,
        size
      }
    });
  }

  getProducto(id: number): Observable<Producto> {
    return this.httpClient.get<Producto>(`${this.url}/${id}`);
  }


  saveProducto(producto: Producto): Observable<Producto> {
    return this.httpClient.post<Producto>(this.url, producto);
  }

  updateProducto(producto: Producto): Observable<Producto> {
    return this.httpClient.put<Producto>(this.url, producto);
  }


  deleteProducto(id: number): Observable<void> {
    return this.httpClient.delete<void>(`${this.url}/${id}`);
  }
}
