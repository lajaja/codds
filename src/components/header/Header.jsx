import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logotip from "../header/Logotip.jsx";
import Merki from "../header/Merki.jsx";
import PopUp from "../header/PopUp";

const Header = () => {
  let linkStyle = `
  text-2xl text-white font-semibold py-1 px-2 rounded-2xl mx-3 
  relative before:content-[''] before:absolute before:block before:w-full before:h-[3px] 
  before:bottom-0 before:left-0 before:bg-white
  before:hover:scale-x-100 before:scale-x-0 before:origin-top-left
  before:transition before:ease-in-out before:duration-300`;

  // let links = ["Одежда", "Снять мерки", "Материалы"];
  // let list = links.map((link, i) => (
  //   <li
  //     key={i}
  //     className="text-2xl text-white font-semibold py-1 px-2 rounded-2xl mx-3
  //   relative before:content-[''] before:absolute before:block before:w-full before:h-[3px]
  //   before:bottom-0 before:left-0 before:bg-white
  //   before:hover:scale-x-100 before:scale-x-0 before:origin-top-left
  //   before:transition before:ease-in-out before:duration-300
  //   "
  //   >
  //     <a href="#">{link}</a>
  //   </li>
  // ));

  // Уменьшение и увелечение шапки ---
  const [isScrollDown, setIsScrollDown] = useState(false);
  window.addEventListener("scroll", () => {
    if (window.scrollY > 0) {
      setIsScrollDown(true);
    } else {
      setIsScrollDown(false);
    }
  });
  const [openPopup, setOpenPopup] = useState(false);

  const HandleRemovePopUp = () => setOpenPopup(false);
  return (
    <>
      <PopUp openPopUp={openPopup} closePopUp={HandleRemovePopUp}>
        <Merki />
      </PopUp>
      <header
        className={` 
        w-full sticky top-0 z-100 flex justify-between items-center px-10  bg-[#FFC3C9] ease-in-out
        
        ${
          isScrollDown
            ? "rounded-none py-2 shadow-md"
            : "rounded-t-2xl py-5 duration-300 ease-in-out"
        }
        `}
      >
        {/* Логотип */}
        <Logotip />
        {/* <Logotip /> */}
        {/* Навигация */}
        <ul className="flex justify-between">
          <li className={`${linkStyle}`}>
            <Link to="/lol">Одежда</Link>
          </li>

          <li className={`${linkStyle}`} onClick={() => setOpenPopup(true)}>
            <span>Снять мерки</span>
          </li>
          <li className={`${linkStyle}`}>
            <Link to="/lol">Материалы</Link>
          </li>
        </ul>
      </header>
      {/* <Merki /> */}
    </>
  );
};

export default Header;
