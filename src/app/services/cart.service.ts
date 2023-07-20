import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { CartItems } from '../models/carItems';
import { CartItem } from '../models/carItem';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  constructor() {}

  addToCart(product: Product) {
    let item = CartItems.find((c) => c.product.productId === product.productId);
    if (item) {
      item.quantity += 1;
    } else {
      let cartItem = new CartItem();
      cartItem.product = product;
      cartItem.quantity = 1;
      CartItems.push(cartItem);
    }
  }

  list(): CartItem[] {
    return CartItems;
  }

  removeFromCart(product:Product){
    let item = CartItems.find((c) => c.product.productId === product.productId);
    
    return CartItems.splice(CartItems.indexOf(item), 1);
  }
}
