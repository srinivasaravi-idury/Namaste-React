import { CDN_URL } from "../utils/contants";
import {useDispatch} from "react-redux";
import {addItem} from "../utils/cartSlice";
const ItemList = ({item})=>{
  const dispatch=useDispatch();
  const handleAddToCart = (item) => {
    dispatch(addItem(item));
  };
  const {name,price,defaultPrice,imageId,description} = item?.card?.info
    return (
      <div className="m-2 p-4 border-2 shadow-md flex">
        <div className="w-9/12">
          <h3 className="font-medium">{name}</h3>
          <h4>
            ₹
            {defaultPrice / 100 ||
              price / 100}
          </h4>
          <p className="text-gray-500 text-sm">
            {description}
          </p>
        </div>
        <div className="w-3/12 text-center">
          {imageId && (
            <img
              className="p-4"
              src={CDN_URL + imageId}
              alt={name}
            />
          )}
          <button className="bg-black text-white p-1 border-gray-500 my-2 shadow-lg w-20" onClick={()=>handleAddToCart(item)}>
            Add +
          </button>
        </div>
      </div>
    );
}

export default ItemList