import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ResponseCountyData } from '../model/responseCountyData.model';

@Injectable({
  providedIn: 'root'
})
export class CountyDataService {

  apiUrl = 'https://cors-anywhere.herokuapp.com/http://spatial-data-processor-lb-1237091983.sa-east-1.elb.amazonaws.com/county/data';
  // apiUrl = 'http://localhost:8080/county/data';

  constructor(

    private httpClient: HttpClient
  ) { }


  getCountyData(): Observable<ResponseCountyData> {
    return this.httpClient.get<ResponseCountyData>(this.apiUrl);
  }
}
