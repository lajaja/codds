import React, { useState } from "react";

const CheckListBox = (props) => {
  const [isLined, setIsLined] = useState(false);

  const [isShowDelete, setIsShowDelete] = useState(false);

  function lineText() {
    setIsLined(!isLined);
  }

  function handleDelete() {
    setIsShowDelete(!isShowDelete);
  }

  let nonLined = `text-2xl font-bold mx-5 no-underline hover:brightness-125 cursor:pointer select-none  h-auto max-w-40`;
  let lined = `text-2xl font-bold mx-5 line-through hover:brightness-125 cursor:pointer text-slate-500 select-none h-auto w-max-40`;
  return (
    <>
      {isShowDelete ? null : (
        <div
          className="flex items-center justify-between bg-slate-100 w-11/12 rounded-xl py-5 shadow-md my-5 h-auto"
          onClick={lineText}
        >
          <p className={isLined ? lined : nonLined}>{props.text}</p>
          <button
            className="bg-red-500 text-white rounded-full p-2 font-bold mx-5 hover:brightness-125 cursor:pointer select-none"
            onClick={handleDelete}
          >
            X
          </button>
        </div>
      )}
    </>
  );
};

export default CheckListBox;

