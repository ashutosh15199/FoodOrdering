import React,{useContext} from "react"
import { CDN_URL } from "../utils/constants";
const FoodItem = ({id,name, cloudinaryImageId,  description,price}) => {    
    return (
      <div className="p-4 m-4 w-[300px] rounded-lg bg-gray-100 hover:bg-gray-200" >
        <img
        
          src={CDN_URL+cloudinaryImageId+".png"}
          
        />
        <h3 className="font-bold py-1 text-lg">{id}</h3>
        <h3 className="font-bold py-1 text-lg">{name}</h3>
        <h3 className="font-bold py-1 text-lg">{description}</h3>
        <h3 className="font-bold py-1 text-lg">Rupees: {price/100}</h3>
        
      </div>
    );
  };
  export default FoodItem;