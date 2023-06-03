import { Props } from "../../interface/children";
import { Navigate } from 'react-router-dom';

function PublicRoute({ children }:Props) {
    const token = window.localStorage.getItem("token");

    /**If jwt token is revoked then return to landing page*/
    if (token){
        return <Navigate to='/dashboard' />;
    }
    return <>{children}</>
}

export default PublicRoute;