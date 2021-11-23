import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCarouselProductosComponent } from './admin-carousel-productos.component';

describe('AdminCarouselProductosComponent', () => {
  let component: AdminCarouselProductosComponent;
  let fixture: ComponentFixture<AdminCarouselProductosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminCarouselProductosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminCarouselProductosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
