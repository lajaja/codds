import React from "react";
// import Card from "./components/Card.jsx";

const Home = () => {
  return (
    <>
      <main
        className="flex flex-col justify-center
        bg-[#FFC3C9] w-11/12 rounded-3xl px-10 py-8 my-5"
      >
        <section className="mb-8">
          <button className="rounded-md bg-[#CBFFFF] px-3 py-1 text-[#7D5757] text-2xl font-bold hover:brightness-125 duration-200">
            Подъюбники
          </button>
        </section>
        <section className="grid grid-flow-row auto-rows-max grid-cols-1   place-items-center gap-8">
          {/* <Merki /> */}

          {/* <Card />
            <Card />
            <Card />
            <Card /> */}
        </section>
      </main>

      <div className="m-10 rounded-md bg-[#fbb4bb] px-3 py-1">
        <h1 className="text-3xl text-white font-bold text-center">
          Опыт работы
        </h1>
      </div>

      <section className="w-4/5 mx-auto max-w-5xl container flex items-center  flex-col drop-shadow-lg">
        <main className="flex items-stretch justify-between w-full">
          <div className="flex flex-col p-8 mx-5 bg-white shadow-xl rounded-xl">
            <h3 className="text-2xl font-bold mb-5">Опыт работы</h3>
            <p className="text-xl">
              У меня есть опыт работы в IT-индустрии, я знаю каким образом
              функционируют современные технологии. Я знаю, как работать с
              командами, каким образом должна быть организована работа для
              достижения наилучших результатов.
            </p>
          </div>
          <div className="my-12 border border-t border-b border-slate-300 opacity-30"></div>
          <div className="flex flex-col p-8 mx-5 bg-white shadow-xl rounded-xl">
            <h3 className="text-2xl font-bold mb-5">Заказов выполнено</h3>
            <p className="text-xl">
              Я выполнил более 20 заказов, что говорит о том, что я могу
              выполнить любые задачи, которые мне будут поставлены. Я знаю, что
              заказчики хотят работать с людьми, которые могут выполнить задачи,
              и я могу это сделать.
            </p>
          </div>
          <div className="my-12 border border-t border-b border-slate-300 opacity-30"></div>
          <div className="flex flex-col p-8 mx-5 bg-white shadow-xl rounded-xl">
            <h3 className="text-2xl font-bold mb-5">Профессиональные навыки</h3>
            <p className="text-xl">
              Я знаю, как работать с React, Redux, Node.js, Express, MongoDB,
              PostgreSQL, CSS, HTML, JavaScript, Git, GitHub, Visual Studio
              Code, Google Chrome DevTools, Adobe Photoshop, Adobe Illustrator.
              Я знаю, каким образом должны быть организованы проекты, каким
              образом должна быть структурирована работа.
            </p>
          </div>
        </main>
      </section>
    </>
  );
};

export default Home;
