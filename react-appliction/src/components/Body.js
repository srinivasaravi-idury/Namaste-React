import { useState, useEffect } from "react";
import RestoCards from "./RestoCards";
import ShimmerUI from "./ShimmerUI";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [restraurentList, setRestraurentList] = useState([]);
  const [filteredRestro, setFilteredRestro] = useState([]);
  const [searchText, setSearchText] = useState("");
  const onlineStatus = useOnlineStatus();
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    try {
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.3170339&lng=78.5372125&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      const json = await data.json();
      setRestraurentList(
        json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
      setFilteredRestro(
        json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  if (!onlineStatus) {
    return (
      <h1 className="font-bold">
        Looks like you're Offline, Please check your internet connection ❌
      </h1>
    );
  }
  return restraurentList.length === 0 ? (
    <ShimmerUI />
  ) : (
    <div className="">
      <div className="p-4 m-4 flex items-center">
        <div className="p-4">
          <input
            className="border-2 bg-gray-300"
            type="text"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="mx-4 px-4 bg-red-400"
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
        <div className="p-4">
          <button
            className="px-4 bg-red-400"
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
      <div className="flex flex-wrap w-12/12 mx-auto">
        {filteredRestro.map((ele) => (
          <Link to={"/restaurants/" + ele.info.id}>
            <RestoCards key={ele.id} restoData={ele} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
