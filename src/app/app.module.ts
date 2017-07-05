import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//import { FormsModule }   from '@angular/forms';

import { AppComponent }  from './app.component';

import { ModalModule } from 'ngx-bootstrap';
import { CarouselModule } from 'ngx-bootstrap';


@NgModule({
  imports:      [ BrowserModule, CarouselModule.forRoot(), ModalModule.forRoot() ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
