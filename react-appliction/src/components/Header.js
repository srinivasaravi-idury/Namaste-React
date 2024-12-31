import { LOGO_URL } from "../utils/contants";
import { useState,useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "/src/utils/UserContext"
import { useSelector } from "react-redux";

const Header = () => {
  const {loggedInUser} = useContext(UserContext);
  const [btnName, setBtnName] = useState("Login");
  const onlineStatus = useOnlineStatus();
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);
  return (
    <div className="flex justify-between bg-gray-100 shadow-lg h-32">
      <div className="p-4 flex items-center">
        <h2 className="font-bold">Food App</h2>
        <img className="p-4 w-28 " src={LOGO_URL} alt="app-logo" />
      </div>
      <ul className="flex items-center">
        <li className="px-4">
          connection status: {onlineStatus ? "✅" : "🔴"}
        </li>
        <li className="px-4">
          <Link to="/">Home</Link>
        </li>
        <li className="px-4">
          <Link to="/about">About us</Link>
        </li>
        <li className="px-4">
          <Link to="/contact">Contact us</Link>
        </li>
        <li className="px-4">
          <Link to="/grocery">Grocery</Link>
        </li>
        <li className="px-4 font-bold text-lg">
          <Link to="/cart">Cart : ({cartItems.length} items)</Link>
        </li>
        <li className="px-4 font-bold">{loggedInUser}</li>
        <button
          className="px-4"
          onClick={() => {
            btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
          }}
        >
          {btnName}
        </button>
      </ul>
    </div>
  );
};

export default Header;
