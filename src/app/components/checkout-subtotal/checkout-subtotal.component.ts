import { Component } from '@angular/core';
import { ShoppingCartService } from '../../services/shopping-cart.service';

@Component({
  selector: 'app-checkout-subtotal',
  templateUrl: './checkout-subtotal.component.html',
  styleUrl: './checkout-subtotal.component.css'
})
export class CheckoutSubtotalComponent {

  constructor(public shoppingCart: ShoppingCartService) { }

  ngOnInit(): void {
  }
}
