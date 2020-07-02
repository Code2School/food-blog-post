import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

import { PostsComponent } from './posts.component';
import { PostsRoutes } from './posts.routes';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    PostsComponent
  ],
  imports: [
    CommonModule,
    PostsRoutes,
    BsDropdownModule.forRoot(),
    FontAwesomeModule
  ]
})
export class PostsModule {
}
