import { Component } from '@angular/core';
import { FormBuilder , FormGroup , Validators } from '@angular/forms'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  rForm: FormGroup;
  post:any;
  name:string='';
  about:string=' '; 
  validate:string='';
  select:string='';
  password:string='';
  titleAlert:string='This field is required!'
  

  constructor( private fb: FormBuilder){
    this.rForm =fb.group({
      'name':[null,Validators.required],
      'about':[null,Validators.compose([Validators.required ,Validators.maxLength(100)])],
      'validate':[null,Validators.required],
      'select':[null,Validators.required],
      'password':''
    });
  }
  addPost(post){
    this.name =post.name;
    this.about =post.about;
    this.validate=post.validate;
    this.select=post.select;
   
  }
}
