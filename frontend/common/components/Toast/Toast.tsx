import { ToastContainer } from "react-toastify";

export const Toast = () => (
  <ToastContainer
    autoClose={3000}
    closeOnClick
    hideProgressBar
    position="bottom-center"
  />
);
