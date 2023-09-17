import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutomobilDodatnoComponent } from './automobil-dodatno.component';

describe('AutomobilDodatnoComponent', () => {
  let component: AutomobilDodatnoComponent;
  let fixture: ComponentFixture<AutomobilDodatnoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AutomobilDodatnoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AutomobilDodatnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
