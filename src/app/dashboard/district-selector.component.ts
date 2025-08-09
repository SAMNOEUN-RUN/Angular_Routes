// import { Component } from '@angular/core';
// import { FormsModule } from '@angular/forms';

// @Component({
//   selector:'app-sleep',
//   standalone: true,
//   templateUrl: './sleep.component.html',
//   imports: [FormsModule],
//   styleUrls: ['./sleep.component.scss']
// })

// export class SleepComponent {
//   hoursSlept: number = 0;
//   message: string = '';

//   checkSleep() {
//     if (this.hoursSlept >= 8 && this.hoursSlept <= 10) {
//       this.message = '😴 You had a good sleep!';
//     } else if (this.hoursSlept >=8) {
//       this.message = '😟 You over sleep!';
//     } else if (this.hoursSlept < 8) {
//       this.message = '😐 You had an bad sleep!';
//     }
// }
// }


import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-district',
  standalone: true,
  templateUrl: './district-selector.component.html',
  imports: [FormsModule],
  styleUrls: ['./district-selector.component.scss']
})
export class DistrictSelectorComponent {
  selectedDistrict: string = '';
  message: string = '';

  checkDistrict() {
    if (this.selectedDistrict === 'Battambang City') {
      this.message = '🏙 Famous for Colonial Buildings, Phsar Nath Market, and Riverside Views.';
    } else if (this.selectedDistrict === 'Ek Phnom') {
      this.message = '⛩ Known for Ek Phnom Temple and peaceful rice fields.';
    } else if (this.selectedDistrict === 'Bavel') {
      this.message = '🌾 Large rice farms and beautiful countryside scenery.';
    } else if (this.selectedDistrict === 'Moung Ruessei') {
      this.message = '🛍 Bustling local markets and rice production areas.';
    } else if (this.selectedDistrict === 'Rotanak Mondol') {
      this.message = '⛰ Mountain views and nature trails.';
    } else {
      this.message = '❓ Please select a district to see popular places.';
    }
  }
}
