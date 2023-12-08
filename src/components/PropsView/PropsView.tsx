import "./PropsView.css";
import ProductComponent from "../common/ProductComponent/ProductComponent";
import CartComponent from "../common/CartComponent/CartComponent";
import { useState } from "react";

export interface CartItems {
  id: number;
  qty: number;
  price: number;
}

const PropsView = () => {
  const [cartItems, setCartItems] = useState<CartItems[]>([]);

  const handleCartUpdate = (newProductInfo: CartItems) => {
    const idxInState = cartItems.findIndex(
      (item) => item.id === newProductInfo.id
    );
    const updatedCartItems: CartItems[] = [...cartItems];
    if (idxInState !== -1) {
      if (newProductInfo.qty === 0) {
        updatedCartItems.splice(idxInState, 1);
      } else {
        updatedCartItems[idxInState] = newProductInfo;
      }
    } else {
      updatedCartItems.push(newProductInfo);
    }
    setCartItems(updatedCartItems);
  };

  const calculateTotalItems = (): number => {
    if (cartItems.length === 0) return 0;
    let totalItems = 0;
    cartItems.forEach((cartItem) => (totalItems += cartItem.qty));
    return totalItems;
  };

  const calculateTotalPrice = (): number => {
    if (cartItems.length === 0) return 0;
    let totalPrice = 0;
    cartItems.forEach(
      (cartItem) => (totalPrice += cartItem.price * cartItem.qty)
    );
    return totalPrice;
  };

  // derived state -> changes in parent state will re-trigger calculation
  const totalItems = calculateTotalItems();
  const totalPrice = calculateTotalPrice();

  return (
    <div className="simpleView">
      <div className="productContainer">
        <h2>Products</h2>
        <ProductComponent
          key={`simple-prod-1`}
          id={1}
          name={"Gundam"}
          price={5}
          updateQty={handleCartUpdate}
        />
        <ProductComponent
          key={`simple-prod-2`}
          id={2}
          name={"Space Marine"}
          price={10}
          updateQty={handleCartUpdate}
        />
      </div>
      <CartComponent
        cartDesc="Cart is controlled by parent"
        isCartEmpty={cartItems.length === 0}
        totalItems={totalItems}
        totalPrice={totalPrice}
      />
    </div>
  );
};

export default PropsView;
