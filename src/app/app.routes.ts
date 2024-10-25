import { Routes } from '@angular/router';

import { DashboardComponent } from './lib/components/dashboard/dashboard.component';

export const routes: Routes = [
  { path: '**', component: DashboardComponent },
];
