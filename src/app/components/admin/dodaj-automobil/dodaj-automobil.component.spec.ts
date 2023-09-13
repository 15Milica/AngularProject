import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DodajAutomobilComponent } from './dodaj-automobil.component';

describe('DodajAutomobilComponent', () => {
  let component: DodajAutomobilComponent;
  let fixture: ComponentFixture<DodajAutomobilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DodajAutomobilComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DodajAutomobilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
