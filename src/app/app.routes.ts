import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DistrictSelectorComponent } from './dashboard/district-selector.component';
import { HistoryComponent } from './history/history.component';
import { CultureComponent } from './culture/culture.component';
import { TourismComponent } from './tourism/tourism.component';
import { FoodComponent } from './food/food.component';

export const routes: Routes = [
  { path: '', component: DistrictSelectorComponent },
  { path: 'home', component: HomeComponent },
  { path: 'history', component: HistoryComponent },
  { path: 'culture', component: CultureComponent },
  { path: 'tourism', component: TourismComponent },
  { path: 'food', component: FoodComponent },
  { path: '**', redirectTo: '' }
];
