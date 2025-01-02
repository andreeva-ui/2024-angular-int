import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PageUrlEnum } from './modules/ent/interfaces/enum';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'int';
  urls = PageUrlEnum;
}
