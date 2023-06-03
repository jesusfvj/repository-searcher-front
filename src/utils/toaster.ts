import { toast } from 'react-toastify';

const toastMessageError = (errorMessage:string) => {
    toast.error(errorMessage, {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
    });
};

const toastMessageSuccess = (message:string) => {
    toast.success(message , {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
    });
};

export { toastMessageError, toastMessageSuccess}