import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarPuestoComponent } from './consultar-puesto.component';

describe('ConsultarPuestoComponent', () => {
  let component: ConsultarPuestoComponent;
  let fixture: ComponentFixture<ConsultarPuestoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultarPuestoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsultarPuestoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
