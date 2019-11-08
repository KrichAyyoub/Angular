import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {LivresComponent} from './livres/livres.component';
import {AproposComponent} from './apropos/apropos.component';


const routes: Routes = [
  {path : 'livres' , component : LivresComponent },
  {path : 'apropos' , component : AproposComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


