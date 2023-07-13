import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { HomeComponent } from './home/home.component';
import { DetailComponent } from './detail/detail.component';
import { CreateProductComponent } from './create-product/create-product.component';
import { ProductListComponent } from './product-list/product-list.component';
import { PokemonCardComponent } from './components/pokemon-card/pokemon-card.component';
import { PokemonStatusComponent } from './components/pokemon-status/pokemon-status.component';
import { PokemonStatusPipe } from '../@core/pipes/pokemon-status.pipe';


@NgModule({
  declarations: [
    HomeComponent,
    DetailComponent,
    CreateProductComponent,
    ProductListComponent,
    PokemonCardComponent,
    PokemonStatusComponent,
    PokemonStatusPipe
  ],
  imports: [
    CommonModule,
    PagesRoutingModule
  ]
})
export class PagesModule { }
