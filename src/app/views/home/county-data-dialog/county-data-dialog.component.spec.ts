import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountyDataDialogComponent } from './county-data-dialog.component';

describe('CountyDataDialogComponent', () => {
  let component: CountyDataDialogComponent;
  let fixture: ComponentFixture<CountyDataDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountyDataDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CountyDataDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
