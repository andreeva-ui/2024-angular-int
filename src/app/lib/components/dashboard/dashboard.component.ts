import { Component } from '@angular/core';

import {MatListModule} from '@angular/material/list';
import {MatTreeModule} from '@angular/material/tree';


import { data } from '../../constants';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [MatListModule, MatTreeModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  data = data;
}
