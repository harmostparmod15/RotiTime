import React from "react";
import { useNavigate } from "react-router-dom";

const Error = () => {
  const navigate = useNavigate();

  const handleBackToHome = () => {
    console.log("navigate");
    navigate("/");
  };

  return (
    <div className=" gap-4 w-5/12 mx-auto h-screen flex flex-col items-center justify-center   ">
      <h1 className="text-5xl font-bold  ">Oops !!</h1>
      <h1 className="text-3xl  font-bold ">Thats an Error</h1>
      <button
        onClick={handleBackToHome}
        className="bg-green-400 py-2 px-4 font-bold rounded-lg text-white "
      >
        Go to home
      </button>
    </div>
  );
};

export default Error;
