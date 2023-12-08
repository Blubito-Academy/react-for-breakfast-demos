import { CartItems } from "../components/PropsView/PropsView";
import { makeAutoObservable } from "mobx";

class CartStore {
  cartItems: CartItems[] = [];

  constructor() {
    makeAutoObservable(this); //makeAutoObservable is like makeObservable on steroids
  }

  get totalPrice() {
    return this.cartItems.reduce((acc, item) => acc + item.price * item.qty, 0); // is computed
  }

  get totalItems() {
    return this.cartItems.reduce((acc, item) => acc + item.qty, 0); // is computed
  }

  get isCartEmpty() {
    return this.cartItems.length === 0;
  }

  updateCartItems = (newItemInfo: CartItems) => {
    const idxInState = this.cartItems.findIndex(
      (item) => item.id === newItemInfo.id
    );

    if (idxInState !== -1) {
      if (newItemInfo.qty === 0) {
        this.cartItems.splice(idxInState, 1);
      } else {
        this.cartItems[idxInState] = newItemInfo;
      }
    } else {
      this.cartItems.push(newItemInfo);
    }
  };
}

export const cartStore = new CartStore();
