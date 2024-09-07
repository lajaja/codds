import React, { useState } from "react";
import { Link } from "react-router-dom";

const Logotip = () => {
  let [logoHover, setLogoHover] = useState(false);

  function handleLogoHover() {
    setLogoHover(true);
  }
  function handleLogoLeave() {
    setLogoHover(false);
  }
  return (
    <Link
      to={"/"}
      className="flex items-center justify-center cursor-pointer"
      onMouseOver={handleLogoHover}
      onMouseLeave={handleLogoLeave}
    >
      <div
        className={`p-1 mx-3 border-2 border-white rounded-2xl shadow-md2 duration-300 ease-in-out ${
          logoHover ? "shadow-md3 " : ""
        }`}
      >
        <img
          src="/LogoButterfly.svg"
          alt="Логотип"
          className={`w-12 h-12 duration-300 ease-in-out  ${
            logoHover ? "-translate-y-[1px]" : ""
          }`}
        />
      </div>
      <h1
        className={`uppercase font-bold text-3xl text-white duration-300 ease-in-out hover:drop-shadow-xl ${
          logoHover ? "-translate-y-[1px]" : ""
        }`}
      >
        inave
      </h1>
    </Link>
  );
};

export default Logotip;
