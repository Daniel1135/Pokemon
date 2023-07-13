import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/app/@core/services/products.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  detailParamId!:string;
  pokemonDetails!:any;
  constructor(private readonly productService:ProductsService, private readonly router:ActivatedRoute) { }

  ngOnInit(): void {
    this.router.params.subscribe(({id})=> this.detailParamId = id)

    this.productService.getPokemonDetails(this.detailParamId).subscribe((details)=>{
     this.pokemonDetails = details
      console.log(details);

    })
  }

}
