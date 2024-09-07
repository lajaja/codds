import React from "react";

const PopUp = ({ children, openPopUp, closePopUp }) => {
  const handlelosePopUp = (e) => {
    if (e.target.id === "ModelContainer") {
      closePopUp();
    }
  };
  if (openPopUp !== true) return null;

  return (
    <div
      id="ModelContainer"
      onClick={handlelosePopUp}
      className="fixed inset-0 h-full w-full flex justify-center items-center  z-[99999]"
    >
      <div className="lg:mb-48  relative flex flex-col items-start p-5 bg-white w-10/12 md:w-2/3 lg:2/3 h-1/2 shadow-rd rounded-lg ">
        <img
          onClick={closePopUp}
          src="/Pin.svg"
          className="absolute right-5 top-5 w-12 h-w-12 drop-shadow-rd2 hover:drop-shadow-rd3 cursor-pointer hover:-translate-y-px duration-300"
        />
        {/* <div className="w-full p-3 justify-center items-center">
          <h2 className="font-semibold py-3 text-center text-xl">My PopUP</h2>
        </div> */}

        {children}
      </div>
    </div>
  );
};

export default PopUp;
