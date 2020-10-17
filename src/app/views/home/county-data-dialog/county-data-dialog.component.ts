import { Component, OnInit, Inject } from '@angular/core';
import { ResponseCountyData } from 'src/app/shared/model/responseCountyData.model';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-county-data-dialog',
  templateUrl: './county-data-dialog.component.html',
  styleUrls: ['./county-data-dialog.component.css']
})
export class CountyDataDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<CountyDataDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public countyData: ResponseCountyData
  ) {
    console.log(countyData);
   }

  ngOnInit(): void {
  }

}
