import { Component } from '@angular/core';
import { defaultsDeep } from 'lodash';
import { MobileService } from 'src/app/mobile/mobile.module';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  constructor(private mobileService: MobileService) {
      this.mobileService.printBrand();
  }
}