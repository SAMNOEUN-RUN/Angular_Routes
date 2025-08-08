import { Routes } from '@angular/router';
import { HomeComponent } from './dashboard/home.component';
import { AboutComponent } from './about/about.component';
import { SleepComponent } from './sleep/sleep.component';

export const routes: Routes = [
  { path: '', component: SleepComponent }, // default page
  { path: 'sleep', component: SleepComponent },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: '**', redirectTo: '' } // fallback
];
