import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogDetallesComponent } from './dialog-detalles.component';

describe('DialogDetallesComponent', () => {
  let component: DialogDetallesComponent;
  let fixture: ComponentFixture<DialogDetallesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogDetallesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogDetallesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
