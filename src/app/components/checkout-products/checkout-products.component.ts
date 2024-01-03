import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ShoppingCartService } from '../../services/shopping-cart.service';

@Component({
  selector: 'app-checkout-products',
  templateUrl: './checkout-products.component.html',
  styleUrl: './checkout-products.component.css'
})
export class CheckoutProductsComponent {
  @Input() checkout_products!: any [];
  @Output() deleteEvent: EventEmitter<any> = new EventEmitter()

  constructor(public shopping_cart_service: ShoppingCartService) { }

  ngOnInit(): void {
    console.log('products', this.checkout_products)
  }

  removeItem(p: any){
    this.shopping_cart_service.removerItem(p)
    this.deleteEvent.emit(p)
  }
}
