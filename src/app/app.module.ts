import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { Service } from './service';



@NgModule({
  declarations: [
    AppComponent
    ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [Service],
  bootstrap: [AppComponent]
})
export class AppModule { }
