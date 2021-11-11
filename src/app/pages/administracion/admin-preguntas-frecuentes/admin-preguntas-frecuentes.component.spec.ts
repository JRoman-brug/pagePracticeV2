import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPreguntasFrecuentesComponent } from './admin-preguntas-frecuentes.component';

describe('AdminPreguntasFrecuentesComponent', () => {
  let component: AdminPreguntasFrecuentesComponent;
  let fixture: ComponentFixture<AdminPreguntasFrecuentesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminPreguntasFrecuentesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminPreguntasFrecuentesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
