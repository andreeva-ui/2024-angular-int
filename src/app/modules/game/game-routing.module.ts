import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './components/form/form.component';
import { MainComponent } from './components/main/main.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'form',
        component: FormComponent,
      },
      {
        path: '',
        component: MainComponent,
      },
      {
        path: '**',
        component: MainComponent,
      },
    ]
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule]
})
export class GameRoutingModule { }
