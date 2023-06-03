import { Props } from "../../interface/children";
import { Navigate } from 'react-router-dom';

function PublicRoute({ children }:Props) {
    const token = window.localStorage.getItem("token");

    if (token){
        return <Navigate to='/dashboard' />
    }
    return <>{children}</>;
}

export default PublicRoute;