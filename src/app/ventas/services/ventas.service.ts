import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';

import { environment } from 'src/environments/environment';
import { Venta } from 'src/app/models/venta.interface';
import Page from 'src/app/models/page.interface';

@Injectable({
  providedIn: 'root'
})
export class VentasService {

  private url: string = `${environment.url}/ventas`;

  constructor(private httpClient: HttpClient) { }

  getVentas(page = 0, size = 1): Observable<Page<Venta>> {
    console.log('solicitando información de las ventas', {page, size});
    return this.httpClient.get<Page<Venta>>(this.url, {
      params: {
        page,
        size
      }
    }); 
  }

  getVenta(id: number): Observable<Venta> {
    return this.httpClient.get<Venta>(`${this.url}/${id}`);
  }

  getVentasByRangeDate(dateStart: Date, dateEnd: Date, page = 0, size = 1): Observable<Page<Venta>> {
    return this.httpClient.get<Page<Venta>>(this.url, {
      params: {
        page,
        size,
        dateStart: dateStart.toISOString().substring(0,10),
        dateEnd: dateEnd.toISOString().substring(0,10)
      }
    });
  }
}
