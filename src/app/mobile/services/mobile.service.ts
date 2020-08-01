import { Injectable } from "@angular/core";
import { MobileConfig } from '../mobile.module';

@Injectable()
export class MobileService {

    public mobileConfig: MobileConfig;
    constructor(mobileConfig: MobileConfig) {
      this.mobileConfig = mobileConfig;
    }

    printBrand() {
        console.log(this.mobileConfig.brand);
    }
}