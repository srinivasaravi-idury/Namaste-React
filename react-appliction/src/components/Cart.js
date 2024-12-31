import {useSelector,useDispatch} from 'react-redux';
import ItemList from "./ItemList";
import {clearCart} from "../utils/cartSlice";

const Cart = ()=>{
    const cartItems = useSelector((store) => store.cart.items);
    const dispatch = useDispatch();
    return (
      <div className="w-6/12 mx-auto border-b border-gray-400 p-4 m-2 shadow-md flex flex-col justify-center items-center">
        <h1 className="font-bold text-2xl m-4 p-4">Cart</h1>
        <button onClick={()=>dispatch(clearCart())} className="cursor-pointer bg-black text-white p-1 m-1">Clear Cart</button>
        {cartItems.length === 0 ? (
          <h2 className="m-2 p-2">Cart is Empty</h2>
        ) : (
          cartItems.map((item) => <ItemList item={item} />)
        )}
      </div>
    );
}
export default Cart