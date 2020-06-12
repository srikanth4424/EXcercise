import { Component, OnInit, Input } from '@angular/core';
import { VsoftService } from '../vsoft.service';

@Component({
  selector: 'app-viewemployee',
  templateUrl: './viewemployee.component.html',
  styleUrls: ['./viewemployee.component.css']
})
export class ViewemployeeComponent implements OnInit {
  singleEmployee:any = [{}];
  empData:any = [{}];
  constructor(private vs: VsoftService,) { 
    
  }

  ngOnInit() {
    this.viewEmp();  
    
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

}
