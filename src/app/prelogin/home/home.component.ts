import { Component } from '@angular/core';
import { MobileService, MobileConfig } from 'src/app/mobile/mobile.module';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  public mobileConfig: MobileConfig;
  public imagePath: string;

  constructor(private mobileService: MobileService) {
    this.mobileConfig = mobileService.mobileConfig;
    this.imagePath = './assets/images/'+this.mobileConfig.brand+'.jpg';
  }
}