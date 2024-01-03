import { Component } from '@angular/core';
import { ShoppingCartService } from '../../services/shopping-cart.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.css'
})
export class CheckoutComponent {
  items!: any [];

  constructor(public shopping_cart: ShoppingCartService) { }

  ngOnInit(): void {
    this.getShoppingCart()
  }
  getShoppingCart(){
    this.items = this.shopping_cart.get_shopping_cart_items();
  }

  deleteEventHandler(p: any){
    this.getShoppingCart()
  }
}
