import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { Observable } from 'rxjs';
import {ResponseRegionList} from '../model/responseRegionList.model'

@Injectable({
  providedIn: 'root'
})
export class RegionListService {

  apiUrl = 'http://localhost:8080/regions';

  httpOpions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json'
    })
  };

  constructor(
    private httpClient: HttpClient

  ) { }

  public getRegionList(): Observable<ResponseRegionList> {
    return this.httpClient.get<ResponseRegionList>(this.apiUrl);
    // return this.httpClient.get<ResponseRegionList>(this.apiUrl + '/' + regionCode )

  }
}
