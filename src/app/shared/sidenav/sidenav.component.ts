import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styles: [
    `
      mat-sidenav {
        width: 300px;
      }
    `
  ]
})
export class SidenavComponent {

  @ViewChild('sidenav') sideNav!: MatSidenav;


  toggle(): void {
    this.sideNav.toggle();
  }
}
