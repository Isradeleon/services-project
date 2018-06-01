import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Post } from '../classes/Post';
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

  postJSONData(url: string, objectToSend: any): Observable<any>{
    return this.httpClient.post<any>(this.baseApi+url, objectToSend);
  }

  postJSONDataPromise(url: string, objectToSend: any): Promise<any>{
    return this.httpClient.post<any>(this.baseApi+url, objectToSend).toPromise();
  }

  deleteData(url: string): Observable<any>{
    return this.httpClient.delete<any>(this.baseApi+url);
  }

  deleteDataPromise(url: string): Promise<any>{
    return this.httpClient.delete<any>(this.baseApi+url).toPromise();
  }
}
