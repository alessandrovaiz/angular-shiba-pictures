import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShibaComponent } from './shiba/shiba.component';

const routes: Routes = [

  { path: '', component: ShibaComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShibaRoutingModule { }
