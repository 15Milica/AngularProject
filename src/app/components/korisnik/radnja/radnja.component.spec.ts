import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RadnjaComponent } from './radnja.component';

describe('RadnjaComponent', () => {
  let component: RadnjaComponent;
  let fixture: ComponentFixture<RadnjaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RadnjaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RadnjaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
