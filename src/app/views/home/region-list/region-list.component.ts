import { Component, OnInit } from '@angular/core';
import {RegionListService} from 'src/app/shared/service/region-list.service'
import {RegionTaxesService} from 'src/app/shared/service/region-taxes.service'
import { ResponseRegion } from 'src/app/shared/model/responseRegion.model';
import { MatDialog } from '@angular/material/dialog';
import { RegionDetailedDialogComponent } from '../region-detailed-dialog/region-detailed-dialog.component';
import { ResponseRegionTaxes } from 'src/app/shared/model/responseRegionTaxes.model';
import { CountyDataDialogComponent } from '../county-data-dialog/county-data-dialog.component';
import { CountyDataService } from 'src/app/shared/service/county-data.service';

@Component({
  selector: 'app-region-list',
  templateUrl: './region-list.component.html',
  styleUrls: ['./region-list.component.css']
})
export class RegionListComponent implements OnInit {

  regionList: ResponseRegion[];

  constructor(
    public regionListService: RegionListService,
    public regionTaxesService: RegionTaxesService,
    public countyDataService: CountyDataService,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.getRegionList();
  }

  getRegionList() {
    this.regionListService.getRegionList().subscribe(data => {
      console.log(data);
      this.regionList = data.regionList;
      console.log('TESTE');
      console.log(this.regionList);

    })
  };

  openDialog(code: String) {
    console.log('Code:'+code);

    this.regionTaxesService.getRegionDetails(code).subscribe(data => {
      this.dialog.open(RegionDetailedDialogComponent, {
        data: data
      });
    });
  };

  openGeneralDataDialog() {
    this.countyDataService.getCountyData().subscribe(data => {
      this.dialog.open(CountyDataDialogComponent, {
        data: data
      });
    });
  };

}
