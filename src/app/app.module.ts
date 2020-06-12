import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
// importing service
import { PostService } from './Post.service';
import { ViewemployeeComponent } from './viewemployee/viewemployee.component';
import { AppRoutingModule } from './app-routing.module';
import { ViewallComponent } from './viewall/viewall.component';
import { LoginComponent } from './login/login.component';
import { AddpostComponent } from './addpost/addpost.component';

@NgModule({
  declarations: [
    AppComponent,
    ViewemployeeComponent,
    ViewallComponent,
    LoginComponent,
    AddpostComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
   ReactiveFormsModule
  ],
  providers: [PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
