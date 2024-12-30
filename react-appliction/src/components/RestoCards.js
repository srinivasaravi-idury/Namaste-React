import { CDN_URL } from "../utils/contants";
const RestoCards = ({ restoData }) => {
  const { cloudinaryImageId, name, costForTwo, avgRating, cuisines, locality,id } =
    restoData.info;
  return (
    <div className="p-4 m-4 bg-gray-200 flex flex-col items-center text-center max-w-[250px] min-h-96">
      <img
        className="w-10/12 mx-auto"
        src={CDN_URL + cloudinaryImageId}
        alt="resto-image"
      />
      <div>
        <h3 className="font-bold py-2">{name}</h3>
        <h4>{costForTwo}</h4>
        <h4>Rating : {avgRating}</h4>
        <h4 className="">{cuisines[0] + " and more...."}</h4>
        <h4>{locality}</h4>
      </div>
    </div>
  );
};

export default RestoCards;
