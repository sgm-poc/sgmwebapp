import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ResponseRegionTaxes } from 'src/app/shared/model/responseRegionTaxes.model';

@Component({
  selector: 'app-region-detailed-dialog',
  templateUrl: './region-detailed-dialog.component.html',
  styleUrls: ['./region-detailed-dialog.component.css']
})
export class RegionDetailedDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<RegionDetailedDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public regionTaxes: ResponseRegionTaxes
  ) { 
    console.log(regionTaxes)
  }

  ngOnInit(): void {
  }

}
