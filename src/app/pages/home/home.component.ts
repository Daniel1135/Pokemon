import { Component, OnInit } from '@angular/core';
import { pokemon } from 'src/app/@core/models/products';
import { ProductsService } from 'src/app/@core/services/products.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  pokemonList!:pokemon[];

  constructor(private readonly productService: ProductsService) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe((pokemonList)=>{
      this.pokemonList=pokemonList
    });

  }

}
