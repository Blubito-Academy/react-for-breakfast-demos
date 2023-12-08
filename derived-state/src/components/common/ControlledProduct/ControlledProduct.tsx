import "../ProductComponent/ProductComponent.css";
import { CartItems } from "../../PropsView/PropsView";

interface ProductProps {
  id: number;
  name: string;
  price: number;
  qty: number;
  updateQty: (newItemInfo: CartItems) => void;
}

const ControlledProduct = (props: ProductProps) => {
  const { name, price, id, qty, updateQty } = props;

  const handleQtyUpdate = (newQty: number) => {
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

export default ControlledProduct;
