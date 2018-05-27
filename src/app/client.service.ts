import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Post } from './classes/Post';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  baseApi: string = "https://jsonplaceholder.typicode.com/";

  constructor(private httpClient: HttpClient) { }

  getJSONData(url: string): Observable<Post[]>{
    return this.httpClient.get<Post[]>(this.baseApi+url);
  }
}
