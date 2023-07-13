import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { HttpService } from '../api/http.service';
import { pokemon } from '../models/products';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private pokemonProducts$ = new BehaviorSubject<pokemon[]>([]);

  constructor(private readonly http: HttpService) {}

  getProducts(): Observable<any> {
    return this.http.get('/pokemon/?limit=30&offset=0.').pipe(
      map(({ results }: any) => {
        this.pokemonProducts$.next(results)
        return results;
      })
    );
  }

  getPokemon(pokemonUrl: string): Observable<any> {
    return this.http.get(pokemonUrl);
  }

  getPokemonDetails(pokemonName:string):Observable<any>{
    return this.http.get(`/pokemon/${pokemonName}`)
  }

  get getPokemonProducts (): Observable<pokemon[]> {
    return this.pokemonProducts$
  }
}
