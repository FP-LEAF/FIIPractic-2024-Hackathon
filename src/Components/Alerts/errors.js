import {
    toast
} from "react-toastify";

export const unexpectedError = () => {
    return toast.error("Error 500: A aparut o eroare", {
        position: "top-right",
        autoClose: 2500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
    })
}

export const expectedError = (text, toastId = "unique") => {
    return toast.error(text, {
        position: "top-right",
        autoClose: 2500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        toastId
    })
}


export const handleApiErrors = (error) => {
    if (error.response) {

        if (error.response && error.response.data) {
            return expectedError(error.response.data.message);
        }
        return unexpectedError();
    }

}