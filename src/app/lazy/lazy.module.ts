import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LazyComponent } from './lazy.component';
import { MobileService, MobileModule, MobileConfig } from '../mobile/mobile.module';


const routes: Routes = [
    {
      path: '' , component: LazyComponent, pathMatch: 'full'
    }
  ];

const mobileConfig: MobileConfig = {
  'brand' : 'OnePlus 7',
  'price' : 30000
}

@NgModule({
  declarations: [
  ],
  imports: [
    RouterModule.forChild(routes),
    // Calling this will throw error
    // MobileModule.forRoot(mobileConfig)
  ]
})
export class LazyModule { }
