import { Component, ChangeDetectorRef, Inject, Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http';
import { Location } from '@angular/common';
import e from '../event-bus'

@Component({
  selector: 'AngularApp',
  // comment out because of missing html loader and no webpack
  // templateUrl: require('./app.component.html')
  // styleUrls: ['./app.component.css'],
  template: `
  <div style="margin: 40px 30px 0 30px; border-top: solid 1px;">
    <div style="margin-top: 90px; display: inline-block; width: 389px;">
      <h1>This was written in Angular</h1>
      <p>
      <button (click)="sendMessage()">Send a message to Angular</button>
      </p> 
      <p>{{message}}</p>
    </div>
    <img style="display: inline-block; 
      padding: 0 88px 0 178px;
      width:200px;" src="../../public/angularLogo.png" alt="angular Logo"/>
  </div> 
      `,
})

export default class AppComponent {
  message: string = "The message from React should appear here 👈";

  constructor(@Inject(ChangeDetectorRef) private changeDetector) {
    e.on('messageFromReact', message => {
      this.message = message
      this.changeDetector.detectChanges()
    })
  }

  sendMessage() {
    e.emit('messageFromAngular', 'Yip! Hello from Angular! 👍')
  }
}
