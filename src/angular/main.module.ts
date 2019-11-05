import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { APP_BASE_HREF } from "@angular/common"
import { enableProdMode } from '@angular/core'
import  AppComponent from './app.component.ts';

enableProdMode()

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [{ provide: APP_BASE_HREF, useValue: '/angular/' }],
  bootstrap: [AppComponent]
})
export default class MainModule { }
