import React from "react";

const Card = () => {
  return (
    <article className="flex w-full bg-white rounded-xl px-5 py-5 gap-5">
      <img src="/Dress1.png" alt="" />
      <div>
        <h3 className="text-3xl font-semibold text-[#515151]">
          Пышный детский подъбюник из фатина
        </h3>
        <ul>
          <li>
            Материал . . . . . . . <span>Фатин</span>
          </li>
          <li>Рост . . . . . . . . . . . . 122 см</li>
          <li>Обхват талии . . . . 56 см</li>
          <li>Обхват бёдер . . . . 75 см</li>
        </ul>
      </div>
      <div>
        
      </div>
      {/* <button className="relative h-3/4 bg-[#FF9AB8] rounded-md px-3 py-2 z-10 text-white text-2xl font-bold hover:bg-[#FE88AC] duration-200 shadow-lg">
        <span className="absolute top-0 -translate-x-[70%] -translate-y-[25%] left-full">
          <span className="relative flex h-[14px] w-h-[14px]">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF5789] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-[14px] w-[14px] bg-[#FF5789]"></span>
          </span>
        </span>
        Снять мерки
      </button> */}
    </article>
  );
};

export default Card;
