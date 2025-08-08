import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector:'app-sleep',
  standalone: true,
  templateUrl: './sleep.component.html',
  imports: [FormsModule],
  styleUrls: ['./sleep.component.scss']
})

export class SleepComponent {
  hoursSlept: number = 0;
  message: string = '';

  checkSleep() {
    if (this.hoursSlept >= 8 && this.hoursSlept <= 10) {
      this.message = '😴 You had a good sleep!';
    } else if (this.hoursSlept >=8) {
      this.message = '😟 You over sleep!';
    } else if (this.hoursSlept < 8) {
      this.message = '😐 You had an bad sleep!';
    }
}
}