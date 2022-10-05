import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarTicketsComponent } from './editar-tickets.component';

describe('EditarTicketsComponent', () => {
  let component: EditarTicketsComponent;
  let fixture: ComponentFixture<EditarTicketsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarTicketsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarTicketsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
