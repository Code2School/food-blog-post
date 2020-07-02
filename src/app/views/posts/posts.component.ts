import { Component, OnInit } from '@angular/core';

import { BehaviorSubject, Observable } from 'rxjs';

import { PostsService } from '../../shared/services/posts/posts.service';
import { Post } from '../../shared/models/post.interface';
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'blog-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  posts$: Observable<Post[]>;
  update = new BehaviorSubject<boolean>(false);
  faEllipsisV = faEllipsisV;

  constructor(
    private postsService: PostsService
  ) {
  }

  ngOnInit(): void {
    this.fetch();
    this.update.subscribe(update => update === true ? this.fetch() : '');
  }

  private fetch(): void {
    this.posts$ = this.postsService.retrievePosts();

  }

  removePost(id): void {
    this.postsService.removePost(id).subscribe(() => this.update.next(true));
  }

}

