import { useState, useEffect } from "react";
import RestoCards from "./RestoCards";
import ShimmerUI from "./ShimmerUI";
const Body = () => {
  const [restraurentList, setRestraurentList] = useState([]);
  const [filteredRestro, setFilteredRestro] = useState([]);
  const [searchText, setSearchText] = useState("");
  useEffect(async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.3170339&lng=78.5372125&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setRestraurentList(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestro(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  }, []);

  return restraurentList.length === 0 ? (
    <ShimmerUI />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            onClick={() => {
              const filteredRestro = restraurentList.filter((ele) => {
                return ele.info.name
                  .toLowerCase()
                  .includes(searchText.toLowerCase());
              });
              setFilteredRestro(filteredRestro);
            }}
          >
            Search
          </button>
        </div>
        <div className="filter-btn">
          <button
            onClick={() => {
              const filteredList = restraurentList.filter(
                (ele) => ele.info.avgRating > 4.1
              );
              setFilteredRestro(filteredList);
            }}
          >
            Filter top Restaurants
          </button>
        </div>
      </div>
      <div className="resto-container">
        {filteredRestro.map((ele) => (
          <RestoCards restoData={ele} key={ele.id} />
        ))}
      </div>
    </div>
  );
};

export default Body;
