import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { UrlConfig } from '../conf/url-conf';
import { PeopleListResponse } from '../interfaces/people-list.interface';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private httpClient: HttpClient) { }

  fetchPeopleList$(): Observable<PeopleListResponse> {
    return this.httpClient.get<PeopleListResponse>(environment.baseUrl + UrlConfig.peopleList);
  }
}
