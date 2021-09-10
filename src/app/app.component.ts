import { Component } from '@angular/core';
import { Pokemon } from './pokemon';
import { POKEMONS } from './mock-pokemons';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'PokemonCLI List';
  
   pokemon : Pokemon[] | undefined;

  ngOnInit(){
    this.pokemon = POKEMONS;
  }

  onclick(){
    console.log("hello");
  }

  values = '';
  onKey(event: KeyboardEvent) {
    this.values +=(<HTMLInputElement>event.target).value+ ' | ';
  }

  selectPokemon(pokemon: Pokemon ){
 
  }

}
