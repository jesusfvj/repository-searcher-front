import { Props } from "../../interface/children";

function ProtectedRoute({ children }:Props) {

    return <>{children}</>;
}

export default ProtectedRoute;