import ItemList from "./ItemList";
import {useState} from 'react';
const RestaurantCategory = ({ items, showItems, setShowIndex }) => {
  const handleClick = () => {
    setShowIndex();
  };
  return (
    <div className="w-6/12 mx-auto border-b border-gray-400 p-4 m-2 shadow-md">
      <div
        onClick={handleClick}
        className="flex justify-between cursor-pointer"
      >
        <span className="font-bold text-lg">
          {items.title} ({items.itemCards.length})
        </span>
        <span>⬆</span>
      </div>
      <div>
        {showItems && items?.itemCards.map((item) => <ItemList item={item} />)}
      </div>
    </div>
  );
};
export default RestaurantCategory;