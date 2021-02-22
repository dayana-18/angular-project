import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

  PostForm: FormGroup ;

  constructor(private _formBuilder: FormBuilder) {
    
  }

  ngOnInit(): void {

    this.PostForm = this._formBuilder.group({
      title: ['', [ Validators.required ]],
      description: ['', [ Validators.required ]],
      link: ['', [ Validators.required ]]
  })

  this.PostForm.valueChanges.subscribe(console.log)

    /*this.PostForm = new FormGroup({
    title: new FormControl(),
    description: new FormControl(),
    link: new FormControl()
    });
    this.submitPost();*/
  }

  /*submitPost() {
          console.log("Formulaire", this.PostForm.value);
      }*/
}

