import { Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Post } from '../@shared/models/post';
import { IdGeneratorUtils } from '../@shared/utils/id-generator.utils';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

  @Output() addPostEvent = new EventEmitter<Post>();
  PostForm: FormGroup ;

  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit(): void {

    this.PostForm = this._formBuilder.group({
      title: ['', [ Validators.required ]],
      description: ['', [ Validators.required ]],
      link: ['', [ Validators.required ]]
  })



  this.PostForm.valueChanges.subscribe(console.log);

  //console.log(this.PostForm.value.title) ;

  }

  createPost(){
    const post:Post = {
      id: IdGeneratorUtils.uuidv4(),
      title: this.PostForm.get("title").value,
      description: this.PostForm.get("description").value,
      link: this.PostForm.get("title").value,
    }
    this.addPostEvent.emit(this.PostForm.value);
    this.PostForm.reset();

    //alert('Send msg')
    //this.greet.emit();
  }

  submit(){
    console.warn(this.PostForm.value);
  }
}

