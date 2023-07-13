import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pokemonStatus',
})
export class PokemonStatusPipe implements PipeTransform {
  transform(value: string): string {

    if(value.length>2){
      return (value.charAt(0).toUpperCase() + value.slice(1));
    }else {
      return value.toUpperCase();
    }
  }
}
