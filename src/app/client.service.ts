import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

import { Post } from './classes/Post';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  baseApi: string = "https://jsonplaceholder.typicode.com/";
  private post = new BehaviorSubject<any>([]);
  currentPost = this.post.asObservable();

  constructor(private httpClient: HttpClient) { }

  async getJSONData(url: string): Promise<any[]>{
    var res = await this.httpClient.get<any[]>(this.baseApi+url).toPromise();
    this.changeCurrentPost(res);
    return res;
  }

  changeCurrentPost(currentPost){
    this.post.next(currentPost);
  }
}
