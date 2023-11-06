import { Injectable } from '@angular/core';
import { environment } from '../../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IUsers } from '../interfaces/user.interface';
import { IBodyPost, IPost } from '../interfaces/post.interface';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private readonly uri = `${environment.api.URI_BASE}`;

  constructor(private readonly http: HttpClient) { }

  getUsers(): Observable<IUsers[]> {
    return this.http.get<IUsers[]>(`${this.uri}/users`);
  }

  getPost(userId: number): Observable<IPost[]>{
    return this.http.get<IPost[]>(`${this.uri}/users/${userId}/posts`);
  }

  createPost(body: IBodyPost): Observable<IPost>{
    return this.http.post<IPost>(`${this.uri}/posts`, body);
  }
}
