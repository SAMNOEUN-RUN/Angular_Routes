import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-count',
  standalone: true,
  templateUrl: './count.html',
  styleUrl: './count.scss',
  imports: [RouterOutlet],
  template: `<p>Count: {{ count() }}</p>
    <button (click)="increment()">+1</button>
    <hr />
    <button (click)="decrement()">-1</button> `,
})
export class CounterComponent {
  count = signal(0);

  increment() {
    this.count.update((v) => v + 1);
  }
  decrement() {
    this.count.update((v) => v - 1);
  }
  reset() {
    this.count.set(0);
  }
  getCount() {
    return this.count();
  }
}