import { Component, Input, OnInit } from '@angular/core';
import { pokemon } from 'src/app/@core/models/products';
import { ProductsService } from 'src/app/@core/services/products.service';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.scss'],
})
export class PokemonCardComponent implements OnInit {
  @Input() pokemon!: pokemon;

  pokemonImg!: string;

  constructor(private readonly productService: ProductsService) {}

  ngOnInit(): void {
    let url = this.pokemon.url.split('/');
    let uniqePokemonUrl = `/${url[5]}/${url[6]}/`;

    this.productService.getPokemon(uniqePokemonUrl).subscribe((pokemon) => {
      this.pokemonImg = pokemon.sprites.back_default;
    });
  }
}
