import { Component } from '@angular/core';
import { show } from '@cyb/logger';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'app2';
  show(msg) {
    return show(msg);
  }
}
