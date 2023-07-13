import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsService } from '../@core/services/products.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  admin: boolean = true;
  searchBarValue: string = '';

  constructor(
    private readonly router: Router,
    private readonly productsService: ProductsService,
    private readonly snackbar: MatSnackBar
  ) {}

  ngOnInit(): void {}

  onValidation(): void {

    const regex = /^[a-zA-Z]{3,}$/;
    if (regex.test(this.searchBarValue)) {
      this.productsService.getPokemonProducts.subscribe((products) => {
        if (products.find((pokemon) => pokemon.name === this.searchBarValue)) {
          this.router.navigate(['detail', `${this.searchBarValue}`]);
          this.searchBarValue = '';
        }
      });
    } else {
      this.snackbar.open('Wrong credentials', '', {
        duration: 3000,
      });
      this.searchBarValue='';
    }
  }
}
