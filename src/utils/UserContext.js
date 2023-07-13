import React,{createContext} from 'react'
import {useState} from 'react';
const UserContext = createContext({
    user:{ name:"Ashutosh Kumar Tiwari",
    email:"ashutoshkumartiwari686@gmail.com",}
   
});

export default UserContext;