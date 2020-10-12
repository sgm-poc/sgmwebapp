import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
import { ResponseRegionTaxes } from '../model/responseRegionTaxes.model';

@Injectable({
  providedIn: 'root'
})
export class RegionTaxesService {

  apiUrl = 'https://cors-anywhere.herokuapp.com/http://spatial-data-processor-lb-1237091983.sa-east-1.elb.amazonaws.com/regions/';
  taxesPath = '/taxes'

  httpOpions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json'
    })
  };

  constructor(
    private httpClient: HttpClient

  ) { }

  getRegionDetails(code: String) :Observable<ResponseRegionTaxes> { 
    return this.httpClient.get<ResponseRegionTaxes>(this.apiUrl + code + this.taxesPath);
  }
}
