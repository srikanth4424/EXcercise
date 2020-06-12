import { Component, OnInit } from '@angular/core';
import { VsoftService } from '../vsoft.service';
import {  Router} from '@angular/router';

@Component({
  selector: 'app-viewall',
  templateUrl: './viewall.component.html',
  styleUrls: ['./viewall.component.css']
})
export class ViewallComponent implements OnInit {

  emp:any = [{}];
  constructor(private vs: VsoftService,private router: Router){}
  ngOnInit(){
    this.getEmployees();
  }
  getEmployees(){
    this.vs.getAllEmployees().subscribe( data =>{
      this.emp = data;
      console.log(this.emp);
    });
  }
  viewEmployee(index){    
    window.sessionStorage.setItem('editEmpId',index);
    this.router.navigateByUrl('viewEmployee');
  }

}
