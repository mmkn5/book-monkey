import { Component } from '@angular/core';

@Component({
  selector: 'bm-root',
  template: '<bm-book-list>></bm-book-list>',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'BookMonkey';
}
