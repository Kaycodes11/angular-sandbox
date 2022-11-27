import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular todo';
  sendIt = 'This data is from parent';

  logValueFromChild(value: string) {
    console.info("value from the child ", value);
  }
}
