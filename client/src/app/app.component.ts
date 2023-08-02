import { Component } from '@angular/core';
import AOS from 'aos';

AOS.init();

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'client';
  // AOS.init();
}
