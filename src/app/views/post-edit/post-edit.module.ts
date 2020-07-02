import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostEditComponent } from './post-edit.component';
import { PostEditRoutes } from './post-edit.routes';
import { ComponentsModule } from '../../shared/components/components.module';

@NgModule({
  declarations: [PostEditComponent],
  imports: [
    CommonModule,
    PostEditRoutes,
    ComponentsModule
  ]
})
export class PostEditModule { }
