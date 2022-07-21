import { Component, Input } from '@angular/core';
import Cliente from 'src/app/models/cliente.interface';

@Component({
  selector: 'app-info-cliente',
  templateUrl: './info-cliente.component.html',
  styles: [
  ]
})
export class InfoClienteComponent {

  @Input() cliente!: Cliente;

}
