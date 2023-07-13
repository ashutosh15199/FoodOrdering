import React from "react";
import { useRouteError } from "react-router";
const Error = ()=>{
    const err = useRouteError();
    return(
    <div>
        <h1>Opps..</h1>
        <h1>Error is Found..</h1>
        <h4>{err.status}: {err.stutustext}</h4>
    </div>
    )
};
export default Error;