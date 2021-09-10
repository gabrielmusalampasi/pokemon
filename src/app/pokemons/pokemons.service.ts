import { Injectable } from '@angular/core';
import { Pokemon } from '../pokemon';
import { POKEMONS } from '../mock-pokemons';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable()
export class PokemonsService {

  constructor(private http: HttpClient){

  }
  private Urlpokemon = 'api/pokemons';

  // Retourne tous les pokémons
  /*getPokemons(): Pokemon[] {
    return POKEMONS;
  }*/

  // Retourne le pokémon avec l'identifiant passé en paramètre
 /* getPokemon(id: number): Pokemon {
    let pokemons = this.getPokemons();
    for(let index = 0; index < pokemons.length; index++) {
      if(id === pokemons[index].id) {
        this.index_pk = index
      }
    }
    return pokemons[this.index_pk];
  }*/

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      console.log(`${operation} failed: ${error.message}`);

      return of(result as T);
    };
  }


  getPokemons(): Observable<Pokemon[]> {
    console.log(this.Urlpokemon)
    return this.http.get<Pokemon[]>(this.Urlpokemon).pipe(
      tap(_ => console.log('success')),
      catchError(this.handleError('getPokemons', []))
    );
  }

  getPokemon(id: number): Observable<Pokemon> {
    const url = `${this.Urlpokemon}/${id}`;

    return this.http.get<Pokemon>(url).pipe(
      tap(_ => console.log(`success id=${id}`)),
      catchError(this.handleError<Pokemon>(`getPokemon id=${id}`))
    );
  }

  updatePokemon(pokemon: Pokemon): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    return this.http.put(this.Urlpokemon, pokemon, httpOptions).pipe(
      tap(_ => console.log(`modifier avec success id=${pokemon.id}`)),
      catchError(this.handleError<any>('updatePokemon'))
    );
  }

  deletePokemon(pokemon: Pokemon): Observable<Pokemon> {
    const url = `${this.Urlpokemon}/${pokemon.id}`;
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    return this.http.delete<Pokemon>(url, httpOptions).pipe(
      tap(_ => console.log(`deleted pok id=${pokemon.id}`)),
      catchError(this.handleError<Pokemon>('deletePokemon'))
    );
  }

  searchPokemons(term: string): Observable<Pokemon[]> {
    if (!term.trim()) {
      // si le terme de recherche n'existe pas, on renvoie un tableau vide.
      return of([]);
    }

    return this.http.get<Pokemon[]>(`${this.Urlpokemon}/?name=${term}`).pipe(
      tap(_ => console.log(`found pokemons matching "${term}"`)),
      catchError(this.handleError<Pokemon[]>('searchPokemons', []))
    );
  }


  getPokemonTypes():string [] {
    return ['Plane','Feu','Feu','Insect','Normal','Electrik','Poison','Fée','Vol']
  }
}
