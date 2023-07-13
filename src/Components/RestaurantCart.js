import React,{useContext} from "react"
import { CDN_URL } from "../utils/constants";
import UserContext from "../utils/UserContext";
const RestaurantCart = (props) => {
    const { resData } = props;
    const {
      cloudinaryImageId,
      name,
      avgRating,
      cuisines,
      costForTwo,
      deliveryTime,
  
    }= resData?.data;

    const {user} = useContext(UserContext);
    return (
      <div className="p-4 m-4 w-[300px] h-[500px] rounded-lg bg-pink-50 hover:bg-gray-200" >
        <img
          className="rounded-lg"
          alt="res-logo"
          src={CDN_URL+cloudinaryImageId+".png"}
          
        />
        <h3 className="font-bold py-2 text-lg">{name}</h3>
        {/* <h4 className="bold">{cuisines.join(" ,")}</h4> */}
        <h4 className="bold">{avgRating} stars</h4>
        <h4 className="bold">{costForTwo / 100}</h4>
        <h4 className="bold">{deliveryTime}</h4>
        <span className="font-bold">{user.name}::--</span> 
      <span className="font-bold">{user.email}</span>
      </div>
    );
  };
  export default RestaurantCart;