import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrikaziAutomobileComponent } from './prikazi-automobile.component';

describe('PrikaziAutomobileComponent', () => {
  let component: PrikaziAutomobileComponent;
  let fixture: ComponentFixture<PrikaziAutomobileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrikaziAutomobileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrikaziAutomobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
