import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [
    `
    .container {
        padding: 15px;
        background-color: #E7E7E7;
        min-height: calc(100vh - 94px)
      }
    `
  ]
})
export class AppComponent {
  title = 'eval-backend';
}
