import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutomobilCardComponent } from './automobil-card.component';

describe('AutomobilCardComponent', () => {
  let component: AutomobilCardComponent;
  let fixture: ComponentFixture<AutomobilCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AutomobilCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AutomobilCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
