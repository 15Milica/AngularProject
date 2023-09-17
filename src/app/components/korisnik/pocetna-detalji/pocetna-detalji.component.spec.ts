import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PocetnaDetaljiComponent } from './pocetna-detalji.component';

describe('PocetnaDetaljiComponent', () => {
  let component: PocetnaDetaljiComponent;
  let fixture: ComponentFixture<PocetnaDetaljiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PocetnaDetaljiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PocetnaDetaljiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
