import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewemployeeComponent } from './viewemployee/viewemployee.component';
import { ViewallComponent } from './viewall/viewall.component';
import { LoginComponent } from './login/login.component';
import { AddpostComponent } from './addpost/addpost.component';
const routes: Routes = [
  {
    path: '', component: LoginComponent
  },
  { path: 'viewEmployee', component: ViewemployeeComponent }
  ,
  { path: 'viewall', component: ViewallComponent },
  { path: 'addpost', component: AddpostComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
