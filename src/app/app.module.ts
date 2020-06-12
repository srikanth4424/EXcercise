import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
// importing service
import { VsoftService } from './vsoft.service';
import { ViewemployeeComponent } from './viewemployee/viewemployee.component';
import { AppRoutingModule } from './app-routing.module';
import { ViewallComponent } from './viewall/viewall.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    ViewemployeeComponent,
    ViewallComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [VsoftService],
  bootstrap: [AppComponent]
})
export class AppModule { }
