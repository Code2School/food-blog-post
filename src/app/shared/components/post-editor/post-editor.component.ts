import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Post } from '../../models/post.interface';

@Component({
  selector: 'blog-post-editor',
  templateUrl: './post-editor.component.html',
  styleUrls: ['./post-editor.component.scss']
})
export class PostEditorComponent implements OnInit {

  @Input() post: Post = {
    title: '',
    body: ''
  };
  @Output() publish: EventEmitter<Post> = new EventEmitter();
  postForm: FormGroup;

  constructor(
  ) { }

  ngOnInit(): void {
    this.postForm = new FormGroup({
      title: new FormControl('', [ Validators.required ]),
      body: new FormControl('', [ Validators.required ])
    });
    this.postForm.patchValue(this.post);
  }

  onSubmit() {
    this.publish.emit(this.postForm.value as Post);
  }

}
