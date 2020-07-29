import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from '../../interfaces/User';
import {Post} from '../../interfaces/Post';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private httpClient: HttpClient) { }

  getAllUsers(): Observable<User[]>{
    return this.httpClient.get<User[]>(`https://jsonplaceholder.typicode.com/users`);
  }

  getPostByUserId(id): Observable<Post[]>{
    return this.httpClient.get<Post[]>(`https://jsonplaceholder.typicode.com/posts?userId=${id}`);

  }
}
