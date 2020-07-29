import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Post} from '../../interfaces/Post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private httpClient: HttpClient) { }

  getAllPost(): Observable<any[]>{
    return this.httpClient.get<any[]>('https://jsonplaceholder.typicode.com/posts');
  }

  getPost(id): Observable<Post>{
    return this.httpClient.get<Post>(`https://jsonplaceholder.typicode.com/posts/${id}`);
  }
}
