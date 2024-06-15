import Cookies from "js-cookie";

import { Navigate } from "react-router-dom";

function PrivateRoutes({children}){
    const token = Cookies.get("token");

    if(!token){
        return <Navigate to="/login"></Navigate>
    }

    return children;
}

export default PrivateRoutes;