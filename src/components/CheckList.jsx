import React, { useState } from "react";
import CheckListBox from "./CheckListBox.jsx";

const CheckList = () => {
  const [listItems, setListItems] = useState([]);
  const [isShowNote, setIsShowNote] = useState(false);
  const [valueArea, setValueArea] = useState("");

  let lists = listItems.map((el, i) => {
    return (
      <>
        <CheckListBox key={i} text={el} />
      </>
    );
  });

  // ----- Редактирование заметки -----
  function editNote(i) {
    setIsShowNote(!isShowNote);
    if (isShowNote === true) {
      if (valueArea === "") {
        setIsShowNote(!isShowNote);
        return;
      }
      let copy = [...listItems];
      copy[i] = valueArea;
      setListItems(copy);
      setValueArea("");
    }
  }
  // ----- Удаление заметки -----
  function delNote(i) {
    setListItems([...listItems.splice(i)]);
  }
  // ----- Создание заметки -----
  function createNewNote() {
    setIsShowNote(!isShowNote);
    createNote();
  }

  function createNote() {
    if (isShowNote === true) {
      if (valueArea === "") {
        setIsShowNote(!isShowNote);

        return;
      }
      setListItems([...listItems, valueArea]);
      setValueArea("");
    }
    setIsShowNote(!isShowNote);
  }
  return (
    <>
      <button
        className="text-2xl font-bold bg-[#f89b70] py-3 px-5 rounded-2xl text-white drop-shadow-mg active:brightness-125 mb-5"
        onClick={createNewNote}
      >
        Создать заметку
      </button>
      <button
        className="text-2xl font-bold bg-red-500 py-3 px-5 rounded-2xl text-white drop-shadow-mg active:brightness-125"
        onClick={delNote}
      >
        Удалить заметку
      </button>
      {isShowNote && (
        <>
          <textarea
            autoFocus
            placeholder="Запишите свою заметку:"
            value={valueArea}
            onChange={(e) => setValueArea(e.target.value)}
            className="w-11/12 border border-black 
                                  mt-5
                                  rounded-lg p-2 
                                  font-medium text-black 
                                  focus:outline-none
                                  min-h-10 h-auto"
          />
          {/* <button
            className="text-2xl font-bold bg-[#8bf870] py-3 px-5 rounded-2xl text-white drop-shadow-mg active:brightness-125 mt-5"
            onClick={openNote}
          >
            Отправить заметку
          </button> */}
        </>
      )}

      <section
        className="flex flex-col items-center
        w-11/12 min-h-20
        rounded-xl bg-slate-200 drop-shadow-sm
        my-5
        "
      >
        {lists.reverse()}
      </section>
    </>
  );
};

export default CheckList;
