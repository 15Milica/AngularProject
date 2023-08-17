import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutomobilOpisComponent } from './automobil-opis.component';

describe('AutomobilOpisComponent', () => {
  let component: AutomobilOpisComponent;
  let fixture: ComponentFixture<AutomobilOpisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AutomobilOpisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AutomobilOpisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
