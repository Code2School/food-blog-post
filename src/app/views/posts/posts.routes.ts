import { NgModule } from '@angular/core';

import { UIRouterModule } from '@uirouter/angular';

import { PostsComponent } from './posts.component';

const PostsRoutesConfig = [
  {
    name: 'posts',
    url: '/posts',
    component: PostsComponent,
  }
];

@NgModule({
  imports: [
    UIRouterModule.forChild({
      states: PostsRoutesConfig
    })
  ],
  exports: [
    UIRouterModule
  ]
})
export class PostsRoutes { }
