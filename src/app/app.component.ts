import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: '<router-outlet><spinner></spinner></router-outlet><ng2-toasty></ng2-toasty>'
})
export class AppComponent {
  constructor() {}
}