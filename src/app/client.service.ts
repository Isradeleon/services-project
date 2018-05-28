import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Post } from './classes/Post';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  baseApi: string = "https://jsonplaceholder.typicode.com/";

  constructor(private httpClient: HttpClient) { }

  async getJSONData(url: string): Promise<any>{
    return await this.httpClient.get<any>(this.baseApi+url).toPromise();
  }

}
