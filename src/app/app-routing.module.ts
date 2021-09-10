import { NgModule } from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';
import {PokemonRoutingModule} from "./pokemons/pokemons-routing.module";

import { PageNotFoundComponent } from './page-not-found.component';

const appRoutes: Routes = [
  { path: '', redirectTo: 'pokemons', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule,
    PokemonRoutingModule
  ]
})
export class AppRoutingModule { }
