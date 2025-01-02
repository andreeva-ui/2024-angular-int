import { Routes } from '@angular/router';

import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PageUrlEnum } from './interfaces/enum';

export const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: '', redirectTo: PageUrlEnum.game, pathMatch: 'full' },
  { path: PageUrlEnum.myProducts, loadChildren: () => import('./modules/products/products.module').then(m => m.ProductsModule) },
  { path: PageUrlEnum.game, loadChildren: () => import('./modules/game/game.module').then(m => m.GameModule) },
];
