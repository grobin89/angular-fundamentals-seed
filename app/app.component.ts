import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrls: ['app.component.scss'],
  template: `
    <div class="app">
      <input type="text" [value]="name" (blur)="handleBlur($event)"/>
      <div>{{ name }}</div>
    </div>
  `
})
export class AppComponent {
  title: string;
  name: string = "Roger";
  logo: string = 'img/logo.png';
  constructor() {
    this.title = 'Ultimate Angular';
  }
  handleBlur(event: any) {
    this.name = event.target.value;
    console.log(event);
  }
}