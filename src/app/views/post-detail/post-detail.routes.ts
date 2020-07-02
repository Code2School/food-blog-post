import { NgModule } from '@angular/core';

import { UIRouterModule } from '@uirouter/angular';

import { PostDetailComponent } from './post-detail.component';

const PostDetailRoutesConfig = [
  {
    name: 'post-detail',
    url: '/posts/:id',
    component: PostDetailComponent,
  }
];

@NgModule({
  imports: [
    UIRouterModule.forChild({
      states: PostDetailRoutesConfig
    })
  ],
  exports: [
    UIRouterModule
  ]
})
export class PostDetailRoutes {
}
