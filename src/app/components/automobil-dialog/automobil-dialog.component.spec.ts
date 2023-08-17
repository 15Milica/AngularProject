import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutomobilDialogComponent } from './automobil-dialog.component';

describe('AutomobilDialogComponent', () => {
  let component: AutomobilDialogComponent;
  let fixture: ComponentFixture<AutomobilDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AutomobilDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AutomobilDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
