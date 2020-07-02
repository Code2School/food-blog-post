import { NgModule } from '@angular/core';

import { UIRouterModule } from '@uirouter/angular';

import { PostCreateComponent } from './post-create.component';

const PostCreateRoutesConfig = [
  {
    name: 'post-create',
    url: '/posts/new-story',
    component: PostCreateComponent,
  }
];

@NgModule({
  imports: [
    UIRouterModule.forChild({
      states: PostCreateRoutesConfig
    })
  ],
  exports: [
    UIRouterModule
  ]
})
export class PostCreateRoutes {
}
