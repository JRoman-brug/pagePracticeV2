import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreguntasFrecuentesAgregarComponent } from './preguntas-frecuentes-agregar.component';

describe('PreguntasFrecuentesAgregarComponent', () => {
  let component: PreguntasFrecuentesAgregarComponent;
  let fixture: ComponentFixture<PreguntasFrecuentesAgregarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreguntasFrecuentesAgregarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PreguntasFrecuentesAgregarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
