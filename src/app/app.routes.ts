import { Routes } from '@angular/router';

import { PageUrlEnum } from './modules/ent/interfaces/enum';

export const routes: Routes = [
  { path: PageUrlEnum.bis, loadChildren: () => import('./modules/bis/bis.module').then(m => m.BisModule) },
  { path: PageUrlEnum.game, loadChildren: () => import('./modules/game/game.module').then(m => m.GameModule) },
  { path: PageUrlEnum.ent, loadChildren: () => import('./modules/ent/ent.module').then(m => m.EntModule) },
  { path: PageUrlEnum.ang, loadChildren: () => import('./modules/ang/ang.module').then(m => m.AngModule) },
];
