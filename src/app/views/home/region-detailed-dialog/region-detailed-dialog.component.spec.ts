import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegionDetailedDialogComponent } from './region-detailed-dialog.component';

describe('RegionDetailedDialogComponent', () => {
  let component: RegionDetailedDialogComponent;
  let fixture: ComponentFixture<RegionDetailedDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegionDetailedDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegionDetailedDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
