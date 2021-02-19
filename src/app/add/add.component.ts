import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

  PostForm: FormGroup ;

  constructor() { }

  ngOnInit(): void {

    this.PostForm = new FormGroup({
    title: new FormControl(),
    description: new FormControl(),
    link: new FormControl()
    });
  }

  submitPost() {
          console.log(this.PostForm.value);
      }
}

