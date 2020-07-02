import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { Observable } from 'rxjs';

import { Comment } from '../../models/comment.interface';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  constructor(
    private http: HttpClient
  ) {
  }

  retrieveCommentByPosts(postId): Observable<Comment[]> {
    const params = new HttpParams({
      fromObject: {
        postId
      }
    });
    return this.http.get<Comment[]>('/api/comments', { params });
  }

  addComment(comment: Comment): Observable<Comment>{
    return this.http.post<Comment>('/api/comments', comment);
  }

}
