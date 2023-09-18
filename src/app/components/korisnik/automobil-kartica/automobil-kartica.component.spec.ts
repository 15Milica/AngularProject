import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutomobilKarticaComponent } from './automobil-kartica.component';

describe('AutomobilKarticaComponent', () => {
  let component: AutomobilKarticaComponent;
  let fixture: ComponentFixture<AutomobilKarticaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AutomobilKarticaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AutomobilKarticaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
