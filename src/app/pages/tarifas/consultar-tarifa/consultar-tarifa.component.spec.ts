import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarTarifaComponent } from './consultar-tarifa.component';

describe('ConsultarTarifaComponent', () => {
  let component: ConsultarTarifaComponent;
  let fixture: ComponentFixture<ConsultarTarifaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultarTarifaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsultarTarifaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
