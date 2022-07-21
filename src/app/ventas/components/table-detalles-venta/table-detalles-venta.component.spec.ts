import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableDetallesVentaComponent } from './table-detalles-venta.component';

describe('TableDetallesVentaComponent', () => {
  let component: TableDetallesVentaComponent;
  let fixture: ComponentFixture<TableDetallesVentaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableDetallesVentaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableDetallesVentaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
