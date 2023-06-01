import { useLocation } from "react-router-dom";
import { NavBar } from "./NavBar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect } from "react";
import { toastMessageError, toastMessageSuccess } from "../../../Utils/toaster";
import { Loader } from "../Loader";
import { Props } from "../../../interface/children";
import { useUI } from "../../../context/UI/UIContext";

export const Layout = ({ children }: Props) => {
    const arrayExcludeLocations = ["/"]
    const location = useLocation()

    const { setMessageSuccessToaster,
        setMessageErrorToaster,
        messageSuccessToaster,
        messageErrorToaster,
        isLoading,
    } = useUI()

    useEffect(() => {
        if (messageSuccessToaster !== "") {
            toastMessageSuccess(messageSuccessToaster);
            setMessageSuccessToaster("");
        }
    }, [messageSuccessToaster]);

    useEffect(() => {
        if (messageErrorToaster !== "") {
            toastMessageError(messageErrorToaster);
            setMessageErrorToaster("");
        }
    }, [messageErrorToaster]);


    return (
        <>
            {arrayExcludeLocations.includes(location.pathname)
                ?
                <>
                    <div className="h-screen w-screen">
                        {children}
                    </div>
                    <ToastContainer />
                </>
                :
                <>
                    <NavBar />
                    <div className="min-h-[80vh] w-screen">
                        {children}
                    </div>
                    <ToastContainer />
                </>
            }
            {isLoading && <Loader modal={true} />}
        </>
    )
}
