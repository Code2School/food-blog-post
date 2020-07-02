import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { StateService } from '@uirouter/core';
import { BehaviorSubject, Observable } from 'rxjs';

import { PostsService } from '../../shared/services/posts/posts.service';
import { CommentsService } from '../../shared/services/comments/comments.service';

import { Post } from '../../shared/models/post.interface';
import { Comment } from '../../shared/models/comment.interface';


@Component({
  selector: 'blog-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.scss']
})
export class PostDetailComponent implements OnInit {

  post$: Observable<Post>;
  comments$: Observable<Comment[]>;
  commentForm: FormGroup;
  update = new BehaviorSubject<boolean>(false);



  constructor(
    private stateService: StateService,
    private postsService: PostsService,
    private commentsService: CommentsService
  ) { }

  ngOnInit(): void {
    this.fetch();

    this.update.subscribe(update => update === true ? this.fetch() : '');

    this.commentForm = new FormGroup({
      comment: new FormControl('', [ Validators.required ]),
      author: new FormControl('', [ Validators.required ])
    });

  }

  private fetch(): void {
    this.post$ = this.postsService.retrievePostDetail(+this.stateService.params.id);
    this.comments$ = this.commentsService.retrieveCommentByPosts(+this.stateService.params.id);
  }

  onSubmit() {
    const { comment, author } = this.commentForm.value;
    this.commentsService.addComment({
      body: comment,
      author,
      postId: +this.stateService.params.id
    } as Comment).subscribe(() => this.update.next(true));
    this.commentForm.reset();
  }

}
