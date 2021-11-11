import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreguntasFrecuentesEditarComponent } from './preguntas-frecuentes-editar.component';

describe('PreguntasFrecuentesEditarComponent', () => {
  let component: PreguntasFrecuentesEditarComponent;
  let fixture: ComponentFixture<PreguntasFrecuentesEditarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreguntasFrecuentesEditarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PreguntasFrecuentesEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
