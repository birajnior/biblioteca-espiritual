import { Component } from '@angular/core';
import { icones } from './icons/icons.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  icones: icones[] = [
    {
      fasIcon: 'pen',
    },
  ];
  title = 'biblioteca-espiritual';
}
