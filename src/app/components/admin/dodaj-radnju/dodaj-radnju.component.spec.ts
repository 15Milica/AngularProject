import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DodajRadnjuComponent } from './dodaj-radnju.component';

describe('DodajRadnjuComponent', () => {
  let component: DodajRadnjuComponent;
  let fixture: ComponentFixture<DodajRadnjuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DodajRadnjuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DodajRadnjuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
