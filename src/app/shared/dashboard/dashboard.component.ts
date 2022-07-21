import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styles: [
    `
      .box-dashboard {
        margin: 0 auto;
      }
      .card {
        width: 330px;
        display: flex;
        background-color: white;
        padding: 20px;
        cursor: pointer
      }
      .card__description {
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 50%;
      }
      .card__description h3 {
        font-size: 18px;
        font-weight: bold
      }

      .card img {
        width: 50%;
        object-fit: contain
      }
    `
  ]
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
