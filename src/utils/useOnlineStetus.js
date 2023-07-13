import React from 'react'
import {useState,useEffect} from "react";
const useOnlineStetus = () => {

    const [onlineStatus,setOnlineStetus] = useState(true);

    useEffect(()=>{
        window.addEventListener("offline",()=>{
            setOnlineStetus(false);
        });
        window.addEventListener("redpoint",()=>{
            setOnlineStetus(true);
        });
    },[]);
  return onlineStatus;
};

export default useOnlineStetus;