import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']

})
export class HomeComponent {
  topics: string[] = [
  'TypeScript Basics',
    'Angular Components',
    'Routing',
    'Services',
    'Forms',
    'Styling with SCSS'
  ];
}
