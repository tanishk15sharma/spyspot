import React from "react";
import { Toaster } from "react-hot-toast";

const Toast = () => {
  return (
    <Toaster
      position="top-center"
      reverseOrder={false}
      gutter={8}
      containerClassName=""
      containerStyle={{}}
      toastOptions={{
        className: "",
        duration: 3000,
        style: {
          background: "#380912",
          color: "#fff",
        },
        success: {
          duration: 3000,
          theme: {
            primary: "green",
            secondary: "black",
          },
        },
      }}
    />
  );
};

export { Toast };
