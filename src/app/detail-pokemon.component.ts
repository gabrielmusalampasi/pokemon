import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Pokemon } from './pokemon';
import {PokemonsService} from "./pokemons/pokemons.service";

@Component({
  selector: 'detail-pokemon',
  templateUrl: './detail-pokemon.component.html',
})
export class DetailPokemonComponent implements OnInit {

  pokemon: Pokemon | undefined;

  constructor(private route: ActivatedRoute, private router: Router, private pokemonsService: PokemonsService) {}

  ngOnInit(): void {
    let id = +this.route.snapshot.params.id;
    this.pokemonsService.getPokemon(id).subscribe(pokemon => this.pokemon=pokemon);
  }

  goEdit(pokemon: Pokemon): void {
    let link = ['/pokemon/edit', pokemon.id];
    this.router.navigate(link);
  }

  goBack(): void {
    this.router.navigate(['/pokemons']);
  }

  delete(pokemon: Pokemon): void {
    this.pokemonsService.deletePokemon(pokemon)
      .subscribe(_ => this.goBack());
  }

}
