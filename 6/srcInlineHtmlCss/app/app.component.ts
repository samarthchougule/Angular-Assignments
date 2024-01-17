import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  template: `<h1 [class]="'demoClass'">Marvellous infosystems</h1>
    <label>Name: </label><input type="text" />
    <router-outlet></router-outlet> `,
  styles: [
    `
      .demoClass {
        color: darkmagenta;
      }
    `,
  ],
})
export class AppComponent {
  title = 'TextFieldCss';
}
