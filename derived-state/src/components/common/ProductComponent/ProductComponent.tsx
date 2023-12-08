import { useState } from "react";
import "./ProductComponent.css";
import { CartItems } from "../../PropsView/PropsView";

interface ProductProps {
  id: number;
  name: string;
  price: number;
  updateQty: (newItemInfo: CartItems) => void;
}

const ProductComponent = (props: ProductProps) => {
  const { name, price, id, updateQty } = props;
  const [qty, setQty] = useState<number>(0);

  const handleQtyUpdate = (newQty: number) => {
    setQty(newQty);
    const updatedInfo: CartItems = { id: id, price: price, qty: newQty };
    updateQty(updatedInfo);
  };

  return (
    <div className="product">
      <span>{name}</span>
      <span>{price}$</span>
      <input
        className="qty"
        type="number"
        min={0}
        value={qty}
        onChange={(ev) => handleQtyUpdate(Number(ev.target.value))}
      />
    </div>
  );
};

export default ProductComponent;
