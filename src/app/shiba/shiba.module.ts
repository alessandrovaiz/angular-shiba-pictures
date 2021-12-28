import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShibaRoutingModule } from './shiba-routing.module';
import { ShibaComponent } from './shiba/shiba.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  declarations: [
    ShibaComponent
  ],
  imports: [
    CommonModule,
    ShibaRoutingModule,
    MatProgressSpinnerModule
  ]
})
export class ShibaModule { }
