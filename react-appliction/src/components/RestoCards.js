import { CDN_URL } from "../utils/contants";
const RestoCards = ({ restoData }) => {
  const { cloudinaryImageId, name, costForTwo, avgRating, cuisines, locality } =
    restoData.info;
  return (
    <div className="resto-card">
      <img src={CDN_URL + cloudinaryImageId} alt="resto-image" />
      <h3>{name}</h3>
      <h4>{costForTwo}</h4>
      <h4>{avgRating}</h4>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{locality}</h4>
    </div>
  );
};

export default RestoCards;
