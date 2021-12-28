import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path: '',
    redirectTo: '/index',
    pathMatch: 'full'
  },

  {
    path: 'index',
    loadChildren: () => import('./shiba/shiba.module').then(m => m.ShibaModule)
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
