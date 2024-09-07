import React, { useState } from "react";

const Merki = () => {
  const [value, setValue] = useState("1");

  const selectedStyle = ` rounded-t-lg px-2 py-2 pb-4 bg-[#FFC3C9]  translate-y-[1px]`;
  const defaultStyle = `hover:-translate-y-1 hover:duration-75 rounded-full mx-2 bg-[#FF8DA9] px-3 py-1 shadow-md `;
  const selectedStyleText = ` bg-[#FF8DA9] rounded-full px-3 py-1 -translate-y-[1px]`;
  const defaultStyleText = ``;
  function changeHandler(e) {
    setValue(e.target.value);
  }

  return (
    // <section className=" flex flex-col items-center justify-center w-full bg-white ">
    <>
      <div className="flex items-center lg:justify-start md:justify-start justify-between lg:w-2/3 md:w-2/3 w-full  ">
        <label className="cursor-pointer max-w-28">
          <div
            className={`text-white font-bold ${
              value === "1" ? selectedStyle : defaultStyle
            }`}
          >
            <p className={`text-white ${value === "1" ? selectedStyleText : defaultStyleText}`}>Спина</p>
            <input
              className="hidden"
              type="radio"
              name="radio"
              value="1"
              checked={value === "1" ? true : false}
              onChange={changeHandler}
            />
          </div>
        </label>
        <label className="cursor-pointer max-w-28">
          <div
            className={`text-white font-bold  ${
              value === "2" ? selectedStyle : defaultStyle
            }`}
          >
            <p className={`text-white ${value === "2" ? selectedStyleText : defaultStyleText}`}>Плечи</p>
            <input
              className="hidden"
              type="radio"
              name="radio"
              value="2"
              checked={value === "2" ? true : false}
              onChange={changeHandler}
            />
          </div>
        </label>
        <label className="cursor-pointer max-w-28">
          <div
            className={`text-white font-bold  ${
              value === "3" ? selectedStyle : defaultStyle
            }`}
          >
            <p className={`text-white ${value === "3" ? selectedStyleText : defaultStyleText}`}>Талия</p>
            <input
              className="hidden"
              type="radio"
              name="radio"
              value="3"
              checked={value === "3" ? true : false}
              onChange={changeHandler}
            />
          </div>
        </label>
        <label className="cursor-pointer ">
          <div
            className={`text-white font-bold  ${
              value === "4" ? selectedStyle : defaultStyle
            }`}
          >
            <p className={`text-white ${value === "4" ? selectedStyleText : defaultStyleText}`}>Длина</p>
            <input
              className="hidden"
              type="radio"
              name="radio"
              value="4"
              checked={value === "4" ? true : false}
              onChange={changeHandler}
            />
          </div>
        </label>
      </div>
      <div className="lg:rounded-tl-none md:rounded-tl-none rounded-t-none min-w-full h-full py-20 bg-[#FFC3C9] rounded-xl shadow-xl">
        <p>{value}</p>
      </div>
      {/* </section> */}
    </>
  );
};

export default Merki;
