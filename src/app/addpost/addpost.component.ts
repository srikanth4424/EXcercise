import { Component, OnInit } from '@angular/core';
import { PostService } from '../Post.service';
import { FormControl, FormGroup, Validators, FormBuilder, FormArray } from '@angular/forms'
@Component({
  selector: 'app-addpost',
  templateUrl: './addpost.component.html',
  styleUrls: ['./addpost.component.css']
})
export class AddpostComponent implements OnInit {
  addPost:FormGroup;
  constructor(private fb:FormBuilder,
    private postservice:PostService) { }
  ngOnInit()  {
     this.addPost =  this.fb.group({
      userId :[],
      title :[],
      body :[], 
    })

 }
 addPostData(input: HTMLInputElement) {  
  let post = this.addPost.value ;  
  input.value = '';  

  this.postservice.addPost(post)  
    .subscribe(response => {  
      post = response; 
      this.addPost.(post);  
      console.log(response);  
    });  
}  

//  addPostData() {
//   let value = this.addPost.value; 
//    console.log(value);
//  }
}
