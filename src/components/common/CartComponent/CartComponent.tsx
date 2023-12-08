import "./CartComponent.css";

interface CartProps {
  totalItems: number;
  totalPrice: number;
  cartDesc: string;
  isCartEmpty: boolean;
}

const CartComponent = (props: CartProps) => {
  const { totalItems, totalPrice, cartDesc, isCartEmpty } = props;
  return (
    <div className="cart">
      {isCartEmpty && <h2>Cart is empty</h2>}
      <h2>{cartDesc}</h2> <h2>Total items: {totalItems}</h2>{" "}
      <h2>Total price: {totalPrice}</h2>
    </div>
  );
};

export default CartComponent;
