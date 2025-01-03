import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GAME_365 } from '../../interfaces/constants';

@Component({
  selector: 'game-main',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {
  data = GAME_365;
}
