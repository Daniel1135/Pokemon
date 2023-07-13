import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-pokemon-status',
  templateUrl: './pokemon-status.component.html',
  styleUrls: ['./pokemon-status.component.scss'],
})
export class PokemonStatusComponent implements AfterViewInit {
  @Input() pokemonStatus: any;
  @ViewChild('progressBar') progressBar!: ElementRef;

  baseStatus!: number;

  constructor() {}

  ngAfterViewInit() {
    this.progressBar.nativeElement.style.width = `${this.pokemonStatus?.base_stat}%`;
  }
}
