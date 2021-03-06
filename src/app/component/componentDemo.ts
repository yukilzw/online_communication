import { Component } from '@angular/core';
import {trigger, state, style, animate, transition, keyframes } from '@angular/animations';

@Component({
  selector: 'app-2',
  styles: [':host{display:block !important} p{float:left;font-size:20px;width:50%;text-align:center} div{float:left}'],
  animations: [
    trigger('signal', [
      state('go', style({
        'background-color': 'green',
        'height' : '100px'
      })),
      state('stop', style({
        'background-color': 'red',
        'height' : '30px'
      })),
      transition('*=>*', animate(400))
    ])
  ],
  template: `
  <p (click)="go()">{{data.p1}}</p>
  <p (click)="stop()">{{data.p2}}</p>
  <div class="traffic-light" [@signal]="signal"></div> `
})
export class Component_2 {
  title: number|string = 'Tour of Heroes';
  data: Data = {
    p1: 'local-music',
    p2: 'net'
  };
  signal: string;
  go() {
    this.signal = 'go';
  }
  stop() {
    this.signal = 'stop';
  }
}

interface Data {
  p1?: string;
  p2?: string;
}
