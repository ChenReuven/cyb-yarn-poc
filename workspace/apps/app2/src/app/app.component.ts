import { Component } from '@angular/core';
// const { add } = require('@cyb/utils');
import { add } from '@cyb/utils';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'app2';
  add(a, b) {
    return add(a, b);
  }
}
