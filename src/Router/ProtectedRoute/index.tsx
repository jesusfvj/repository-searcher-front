import { Props } from "../../interface/children";
import { Navigate } from 'react-router-dom';

function ProtectedRoute({ children }:Props) {
    const token = window.localStorage.getItem("token");

    if (!token){
        return <Navigate to='/' />
    }
    return <>{children}</>;
}

export default ProtectedRoute;