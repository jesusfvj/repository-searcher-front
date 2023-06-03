import { useLocation } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect } from "react";
import { Loader } from "../Loader";
import { Props } from "../../../interface/children";
import { useUI } from "../../../context/UI/UIContext";
import { NavBar } from "./NavBar";
import { Footer } from "./Footer";
import { WorkInProgress } from "../WorkInProgress";
import { toastMessageError, toastMessageSuccess } from "../../../utils/toaster";

export const Layout = ({ children }: Props) => {
    const arrayExcludeLocations = ["/"]
    const location = useLocation()

    const { setMessageSuccessToaster,
        setMessageErrorToaster,
        messageSuccessToaster,
        messageErrorToaster,
        showWorkInProgress,
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
            <div className="h-screen w-screen">
                {!arrayExcludeLocations.includes(location.pathname) &&
                    <div className="w-screen md:h-[9vh]">
                        <NavBar />
                    </div>}
                <div className="w-screen min-h-full bg-[#0D1117]">
                    {children}
                </div>
                {!arrayExcludeLocations.includes(location.pathname) &&
                    <div className="w-screen h-fit py-12 bg-[#0D1117]">
                        <Footer />
                    </div>}
            </div>
            <ToastContainer />
            {isLoading && <Loader modal={true} />}
            {showWorkInProgress && <WorkInProgress />}
        </>
    )
}
