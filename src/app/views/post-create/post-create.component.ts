import { Component, OnInit } from '@angular/core';
import { PostsService } from '../../shared/services/posts/posts.service';
import { Post } from '../../shared/models/post.interface';
import { StateService } from '@uirouter/core';

@Component({
  selector: 'blog-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.scss']
})
export class PostCreateComponent implements OnInit {

  constructor(
    private postsService: PostsService,
    private stateService: StateService
  ) { }

  ngOnInit(): void {
  }

  handlePublish(post: Post): void {
    this.postsService.addPost(post).subscribe(({ id }) => {
      this.stateService.go('post-detail', { id });
    });
  }

}
