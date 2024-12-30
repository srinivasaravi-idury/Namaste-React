import { CDN_URL } from "../utils/contants";
const RestaurantItem = ({item})=>{
    return (
      <div className="m-2 p-4 border-2 shadow-md flex">
        <div className="w-9/12">
          <h3 className="font-medium">{item?.card?.info?.name}</h3>
          <h4>
            ₹
            {item?.card?.info?.defaultPrice / 100 ||
              item?.card?.info?.price / 100}
          </h4>
          <p className="text-gray-500 text-sm">
            {item?.card?.info?.description}
          </p>
        </div>
        <div className="w-3/12 text-center">
          {item?.card?.info?.imageId && (
            <img
              className="p-4"
              src={CDN_URL + item?.card?.info?.imageId}
              alt={item?.card?.info?.name}
            />
          )}
          <button className="bg-black text-white p-1 border-gray-500 my-2 shadow-lg w-20">
            Add +
          </button>
        </div>
      </div>
    );

}

export default RestaurantItem