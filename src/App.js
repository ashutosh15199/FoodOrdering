// const heading = React.createElement("h1",{id:"heading"},"Hello World From React");
import React, {Suspense, lazy}from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header.js"
import Body from "./Components/Body.js"
import About from "./Components/About.js"
import {createBrowserRouter, RouterProvider,Outlet} from 'react-router-dom';
import Contact from "./Components/Contact.js";
import Error from "./Components/Error.js";
import RestaurantManu from "./Components/RestaurantManu.js"
import {Provider} from "react-redux"
// import Grosery from './Components/Groseri.js'
import store from "./utils/store.js"
import Cart from "./Components/Cart.js"

const Grocery = lazy(()=> import('./Components/Groseri.js'));
const AppLayout = () => {
  return (
    <Provider store={store}>
       <div className="app">
      <Header />
      <Outlet />
    </div>
    </Provider>
   
  );
};
const appRouter= createBrowserRouter([
  {
    path:"/",
    element:<AppLayout/>,
    children:[
      {
        path:"/",
        element:<Body/>
      },
      {
        path:"/about",
        element:<About/>
      },
      {
        path:"/contact",
        element:<Contact/>
      },
      {
        path:"/grocery",
        element: <Suspense fallback={<h2>Loading....</h2>}><Grocery/></Suspense>
      },
      {
        path:"/restaurants/:resId",
        element:< RestaurantManu/>
      },
      {
        path:"/cart",
        element:<Cart/>
      }
    ],
    errorElement:<Error/>
  },

]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
