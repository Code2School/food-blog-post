import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostsModule } from './posts/posts.module';
import { PostDetailModule } from './post-detail/post-detail.module';
import { PostCreateModule } from './post-create/post-create.module';
import { PostEditModule } from './post-edit/post-edit.module';

@NgModule({
  imports: [
    CommonModule,
    PostsModule,
    PostDetailModule,
    PostCreateModule,
    PostEditModule
  ]
})
export class ViewsModule { }
