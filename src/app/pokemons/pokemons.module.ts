import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms'

import { ListPokemonComponent } from '../list-pokemon.component';
import { DetailPokemonComponent } from '../detail-pokemon.component';
import { BorderCardDirective } from '../border-card.directive';
import { PokemonTypeColorPipe } from '../pokemon_type_color.pipe';
import {EditPokemonComponent} from './edit-pokemon.component';
import {PokemonFormComponent} from "./pokemon-form.component";
import {PokemonSearchComponent} from "./recherche.component";
import {LoaderComponent} from './loading.component'
import{PokemonsService} from "./pokemons.service";

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    ListPokemonComponent,
    DetailPokemonComponent,
    BorderCardDirective,
    PokemonTypeColorPipe,
    EditPokemonComponent,
    PokemonFormComponent,
    PokemonSearchComponent,
    LoaderComponent
  ],
  providers: [PokemonsService]
})
export class PokemonsModule { }
