import { NgModule, Injectable, InjectionToken, Inject, Optional, SkipSelf } from '@angular/core';
import { MobileService } from './services/mobile.service';

export interface MobileConfig {
    brand: string;
    price: number
}


const provideMobileService = function(mobileConfig: MobileConfig) {
    return new MobileService(mobileConfig);
}


@Injectable()
export class MobileConfigService {
    constructor() {
        
    }
}

export function provideForRootGuard(mobileConfig: MobileConfig): any {
    if (mobileConfig) {
      throw new Error(
          `MobileModule.forRoot() called twice. Lazy loaded modules should use MobileModule.forChild() instead.`);
    }
    return 'guarded';
  }


@Injectable() 
export class MobileGurad {
    constructor(mobileConfigService: MobileConfigService) {
        if (mobileConfigService) {
            throw new Error(
                `MobileModule.forRoot() called twice. Lazy loaded modules should use MobileModule.forChild() instead.`);
          }
          return 'guarded';
    }
}

@NgModule({})
export class MobileModule { 
    constructor(guard: MobileGurad) {
        console.log(guard);
    }   
     static forRoot(mobileConfig: MobileConfig) {
            return {
                ngModule: MobileModule,
                providers : [,
                    {
                        provide: MobileGurad,
                        deps: [ [MobileConfigService, new Optional(), new SkipSelf() ]]
                    },
                    {
                        provide: MobileConfigService,
                        useValue: mobileConfig,
                    },
                    
                    {
                        provide: MobileService,
                        useFactory: provideMobileService,
                        deps: [ MobileConfigService ]
                    }
                
                ]
            }
    }
}
export { MobileService };