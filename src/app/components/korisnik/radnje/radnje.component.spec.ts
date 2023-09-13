import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RadnjeComponent } from './radnje.component';

describe('RadnjeComponent', () => {
  let component: RadnjeComponent;
  let fixture: ComponentFixture<RadnjeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RadnjeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RadnjeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
