import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostEditorComponent } from './post-editor/post-editor.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [PostEditorComponent],
  exports: [
    PostEditorComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class ComponentsModule { }
