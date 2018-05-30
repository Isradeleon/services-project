import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Post } from './classes/Post';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  baseApi: string = "https://jsonplaceholder.typicode.com/";

  constructor(private httpClient: HttpClient) { }

  getJSONData(url: string): Observable<any>{
    return this.httpClient.get<any>(this.baseApi+url);
  }

  getJSONDataPromise(url: string): Promise<any>{
    return this.httpClient.get<any>(this.baseApi+url).toPromise();
  }
}
