import { observer } from "mobx-react-lite";
import CartComponent from "../common/CartComponent/CartComponent";
import "./MobxView.css";
import { cartStore } from "../../stores/CartStore";
import ControlledProduct from "../common/ControlledProduct/ControlledProduct";

const MobxView = observer(() => {
  return (
    <div className="mobxView">
      <div className="productContainer">
        <h2>Products</h2>
        <ControlledProduct
          key={`mobx-prod-1`}
          id={1}
          name={"Gundam"}
          price={5}
          qty={cartStore.cartItems.find((item) => item.id === 1)?.qty || 0}
          updateQty={cartStore.updateCartItems}
        />
        <ControlledProduct
          key={`mobx-prod-2`}
          id={2}
          name={"Space Marine"}
          price={10}
          qty={cartStore.cartItems.find((item) => item.id === 2)?.qty || 0}
          updateQty={cartStore.updateCartItems}
        />
      </div>
      <CartComponent
        cartDesc="Cart is controlled by store"
        isCartEmpty={cartStore.isCartEmpty}
        totalItems={cartStore.totalItems}
        totalPrice={cartStore.totalPrice}
      />
    </div>
  );
});
export default MobxView;
