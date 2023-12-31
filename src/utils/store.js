import {configureStore} from "@reduxjs/toolkit";
import React from "react"
import cartSlice from "./cartSlice";
const store = configureStore({
    reducer:{
        cart:cartSlice,
    },
});

export default store;