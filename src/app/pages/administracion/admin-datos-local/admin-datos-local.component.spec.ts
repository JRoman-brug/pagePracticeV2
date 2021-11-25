import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDatosLocalComponent } from './admin-datos-local.component';

describe('AdminDatosLocalComponent', () => {
  let component: AdminDatosLocalComponent;
  let fixture: ComponentFixture<AdminDatosLocalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminDatosLocalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminDatosLocalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
