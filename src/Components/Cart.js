import React from "react";
import { useDispatch, useSelector } from "react-redux";
import FoodItem from "./FoodItem";
import { clearItem } from "../utils/cartSlice";
const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearItem());
  };
  return (
    <div>
      <h1 className="font-bold text-3xl">Cart-Item - {cartItems?.length}</h1>
      <button
        className="bg-green-100 p-2 m-5"
        onClick={() => handleClearCart()}
      >
        ClearCart
      </button>
      <div className="flex">
        {cartItems.map((item) => {
          console.log(item);
          return (
            <FoodItem
              key={item.card.info.id}
              name={item.card.info.name}
              cloudinaryImageId={item.card.info.imageId}
              price={item.card.info.price}
              description={item.card.info.description}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Cart;
