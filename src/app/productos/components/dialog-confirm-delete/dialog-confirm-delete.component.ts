import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import Producto from 'src/app/models/producto.interface';

@Component({
  selector: 'app-dialog-confirm-delete',
  templateUrl: './dialog-confirm-delete.component.html',
  styles: [
    `
      .question__title {
        font-size: 17px;
        font-weight: bold
      }
    `
  ]
})
export class DialogConfirmDeleteComponent implements OnInit {

  constructor(
    public DialogRef: MatDialogRef<DialogConfirmDeleteComponent>,
    @Inject(MAT_DIALOG_DATA) public producto: Producto) {
  }

  ngOnInit(): void {
  }

  delete(): void {
    this.DialogRef.close(true);
  }

  cancel(): void {
    this.DialogRef.close();
  }
}
