import { useState, useEffect } from "react";
import restroList from "../utils/tempData";
import RestoCards from "./RestoCards";
import ShimmerUI from "./ShimmerUI";
const Body = () => {
  const [restraurentList, setRestraurentList] = useState([]);
  useEffect(async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.3170339&lng=78.5372125&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setRestraurentList(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  }, []);

  return restraurentList.length === 0 ? (
    <ShimmerUI />
  ) : (
    <div className="body">
      <div className="filter">
        <button
          onClick={() => {
            const filteredList = restraurentList.filter(
              (ele) => ele.rating > 4.1
            );
            setRestraurentList(filteredList);
          }}
        >
          Filter top Restaurants
        </button>
      </div>
      <div className="resto-container">
        {restraurentList.map((ele) => (
          <RestoCards restoData={ele} key={ele.id} />
        ))}
      </div>
    </div>
  );
};

export default Body;
