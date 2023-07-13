import React,{useContext} from "react"
import { CDN_URL } from "../utils/constants";
const FoodItem = ({name, cloudinaryImageId,  description, defaultPrice,costForTwo}) => {    
    return (
      <div className="p-4 m-4 w-[300px] rounded-lg bg-gray-100 hover:bg-gray-200" >
        <img
        
          src={CDN_URL+cloudinaryImageId+".png"}
          
        />
        <h3 className="font-bold py-4 text-lg">{name}</h3>
        {/* <h4 className="bold">{costForTwo / 100}</h4> */}

        {/* <h4 className="bold">Rupees: {defaultPrice / 100}</h4> */}

        <h4 className="bold">{description}</h4>
      </div>
    );
  };
  export default FoodItem;