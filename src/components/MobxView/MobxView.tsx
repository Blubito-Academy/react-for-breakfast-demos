import { observer } from "mobx-react-lite";
import ProductComponent from "../common/ProductComponent/ProductComponent";
import CartComponent from "../common/CartComponent/CartComponent";
import "./MobxView.css";
import { cartStore } from "../../stores/CartStore";

const MobxView = observer(() => {
  return (
    <div className="mobxView">
      <div className="productContainer">
        <h2>Products</h2>
        <ProductComponent
          key={`mobx-prod-1`}
          id={1}
          name={"Gundam"}
          price={5}
          updateQty={cartStore.updateCartItems}
        />
        <ProductComponent
          key={`mobx-prod-2`}
          id={2}
          name={"Space Marine"}
          price={10}
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
