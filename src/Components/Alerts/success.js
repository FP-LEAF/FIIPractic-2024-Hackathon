import {
    toast
} from "react-toastify";

export const successNotify = (text) => {
    return toast.success(text, {
        position: "top-right",
        autoClose: 2500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
    })
}