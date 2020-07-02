import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostCreateComponent } from './post-create.component';
import { PostCreateRoutes } from './post-create.routes';
import { ComponentsModule } from '../../shared/components/components.module';

@NgModule({
  declarations: [
    PostCreateComponent
  ],
  imports: [
    CommonModule,
    PostCreateRoutes,
    ComponentsModule
  ]
})
export class PostCreateModule {
}
