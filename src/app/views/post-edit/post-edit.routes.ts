import { NgModule } from '@angular/core';

import { UIRouterModule } from '@uirouter/angular';

import { PostEditComponent } from './post-edit.component';

const PostEditRoutesConfig = [
  {
    name: 'post-edit',
    url: '/posts/:id/edit',
    component: PostEditComponent,
  }
];

@NgModule({
  imports: [
    UIRouterModule.forChild({
      states: PostEditRoutesConfig
    })
  ],
  exports: [
    UIRouterModule
  ]
})
export class PostEditRoutes {
}
