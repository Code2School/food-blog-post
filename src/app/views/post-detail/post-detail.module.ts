import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostDetailComponent } from './post-detail.component';
import { PostDetailRoutes } from './post-detail.routes';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    PostDetailComponent
  ],
  imports: [
    CommonModule,
    PostDetailRoutes,
    ReactiveFormsModule
  ]
})
export class PostDetailModule {
}
