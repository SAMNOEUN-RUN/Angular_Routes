import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss'
})
export class DashboardComponent {
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
