import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MobileService } from './mobile/mobile.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Angular';
  constructor(private router: Router, private m: MobileService) {
    console.log(this.router);
    m.printBrand();
    
  }
}
