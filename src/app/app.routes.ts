import { Routes } from '@angular/router';


export const routes: Routes = [
   {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
   { path: 'count', loadComponent: () => import('./features/count/count').then(m => m.CounterComponent) },
   { path: 'dashboard', loadComponent: () => import('./features/dashboard/dashboard').then(m => m.DashboardComponent) },
   { path: 'culture', loadComponent: () => import('./features/culture/culture').then(m => m.CultureComponent) },
   { path: 'food', loadComponent: () => import('./features/food/food').then(m => m.FoodComponent) },
   { path: '**', redirectTo: '' }
];
