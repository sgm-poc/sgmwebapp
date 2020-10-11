import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
import { ResponseRegionTaxes } from '../model/responseRegionTaxes.model';

@Injectable({
  providedIn: 'root'
})
export class RegionTaxesService {

  apiUrl = 'http://localhost:8080/regions/';
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
