import { useEffect,useState } from "react";
import ShimmerUI from "./ShimmerUI";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurentMenu = ()=>{
const params = useParams();
const restaurantMenuItems = useRestaurantMenu(params.resId);
const [showIndex, setShowIndex] = useState(0);
if (restaurantMenuItems === null) return <ShimmerUI />;
  const { name, cuisines } =
    restaurantMenuItems?.data?.cards[2]?.card?.card?.info;
  const { itemCards } =
    restaurantMenuItems?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]
      ?.card?.card;
    const categories = restaurantMenuItems?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR
      ?.cards.filter(c=>c?.card?.card?.["@type"] ==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")
  
      return (
    <div>
      <h1 className="text-center my-5 font-bold text-2xl">{name}</h1>
      <h2 className="text-center font-semibold">{cuisines.join(", ")}</h2>
      <div>
        {/* Header */}
        {categories.map((category, index) => (
          <RestaurantCategory
            key={category.id}
            items={category?.card?.card}
            showItems={index === showIndex ? true : false}
            setShowIndex={() => setShowIndex(index)}
          />
        ))}
      </div>
    </div>
  );
}

export default RestaurentMenu