import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { Post } from '../../models/post.interface';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(
    private http: HttpClient
  ) {
  }

  retrievePosts(): Observable<Post[]> {
    return this.http.get<Post[]>('/api/posts');
  }

  retrievePostDetail(id: number): Observable<Post> {
    return this.http.get<Post>(`/api/posts/${id}`);
  }

  addPost(post: Post): Observable<Post> {
    return this.http.post<Post>('/api/posts', post);
  }

  updatePost(post: Post): Observable<Post> {
    const {
      id,
      ...rest
    } = post;
    return this.http.put<Post>(`/api/posts/${id}`, rest);
  }

  removePost(id: number): Observable<Post> {
    return this.http.delete<Post>(`/api/posts/${id}`);

  }

}
