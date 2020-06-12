import { Component, OnInit, Input } from '@angular/core';
import { PostService } from '../Post.service';

@Component({
  selector: 'app-viewemployee',
  templateUrl: './viewemployee.component.html',
  styleUrls: ['./viewemployee.component.css']
})
export class ViewemployeeComponent implements OnInit {
  singleEmployee:any = [{}];
  empData:any = [{}];
  // num1= ((document.getElementById("uid") as HTMLInputElement).value);
  // num2= ((document.getElementById("title") as HTMLInputElement).value);
  // num3= ((document.getElementById("body") as HTMLInputElement).value);
  constructor(private vs: PostService,) { 
    
  }

  ngOnInit() {
    this.viewEmp(); 
    // this.updatePost();
  }
  viewEmp(){
    var eid = window.sessionStorage.getItem('editEmpId');
    this.vs.getAllEmployees().subscribe( data =>{
      this.empData = data;
      console.log(data);
      this.singleEmployee = this.empData.filter(function(obj){
        return obj.id==eid;
      });
      console.log(this.singleEmployee)
    });
  }

  // updatePost( ) {
  //   let post= {
  //     "id" : this.num1,
  //     "title" : this.num2,
  //     "body" : this.num3
  //   }  
  //   this.vs.updatePost(post)  
  //     .subscribe(response => {  
  //     });  
  // }  
}
