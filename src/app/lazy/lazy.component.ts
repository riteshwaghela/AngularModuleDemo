import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { MobileService } from '../mobile/mobile.module';

@Component({
  selector: 'app-lazy',
  templateUrl: './lazy.component.html',
  styleUrls: ['./lazy.component.scss']
})
export class LazyComponent {

  constructor(private router: Router, private m : MobileService) {
      m.printBrand();
  }
}
