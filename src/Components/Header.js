import React,{useContext} from "react";
import { LOGO_URL } from "../utils/constants";
import { useState} from "react";
import {Link} from 'react-router-dom'
import useOnlineStetus from "../utils/useOnlineStetus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
const Header = () => {
  let [btnChange, setbtnChange] = useState("Login");
  const onlineStatus = useOnlineStetus();

  const {user}=useContext(UserContext);
  const cartItem = useSelector(store=>store.cart.items);
  return (
    <div className="flex justify-between bg-pink-100 shadow-lg">
      <div>
        <img className="w-56" src={LOGO_URL} alt="" />
      </div>

     <span className="font-bold">{user.name}::--</span> 
      <span className="font-bold">{user.email}</span>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-4">onlineStatus:{onlineStatus? "Online": "offline"}</li>
          <li className="px-4">
            Home
          </li>
          <li className="px-4">
            <Link to="/contact">ContactUs</Link>
          </li>
          <li className="px-4">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-4">
            <Link to="/about">About</Link>
          </li>
          <li className="px-4">
            <Link to="/cart">
             <li className="px-2"> Cart-{cartItem.length}items</li>
            </Link>
          </li>
          <button
            className="login-btn"
            type="button"
            onClick={() => {
              btnChange === "Login"
                ? setbtnChange("Logout")
                : setbtnChange("Login");
            }}
          >
            {btnChange}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
