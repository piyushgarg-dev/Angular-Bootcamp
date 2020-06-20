import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'counter-app';

  count: number = 0;

  handleIncrease = (): void => {
    if(this.count < 10)
    this.count = this.count + 1;
  }

  handleReset = (): void => {
    this.count = 0;
  }

  handleDecrease = (): void => {
    if(this.count > 0)
    this.count = this.count - 1;
  }

}
