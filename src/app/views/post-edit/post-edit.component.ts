import { Component, OnInit } from '@angular/core';
import { Post } from '../../shared/models/post.interface';
import { Observable } from 'rxjs';
import { PostsService } from '../../shared/services/posts/posts.service';
import { StateService } from '@uirouter/core';

@Component({
  selector: 'blog-post-edit',
  templateUrl: './post-edit.component.html',
  styleUrls: ['./post-edit.component.scss']
})
export class PostEditComponent implements OnInit {

  post$: Observable<Post>;

  constructor(
    private postsService: PostsService,
    private stateService: StateService
  ) {
  }

  ngOnInit(): void {
    this.post$ = this.postsService.retrievePostDetail(+this.stateService.params.id);
  }

  handlePublish(post: Post): void {
    this.postsService.updatePost({
      ...post,
      id: +this.stateService.params.id
    } as Post).subscribe(({ id }) => {
      this.stateService.go('post-detail', { id });
    });
  }

}
