import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { RenovaRoutingModule } from './renova-routing.module';
import { SharedModule } from '../shared/shared.module';
import { RenovaComponent } from './renova.component';
import { HomeComponent } from './pages';


@NgModule({
    declarations: [
      RenovaComponent,
      HomeComponent,
    ],
    imports: [
      CommonModule,
      SharedModule,
      RenovaRoutingModule,
    ],
    exports: [
      RenovaComponent,
      HomeComponent,
    ],
  })
  export class RenovaModule { }
