import React from "react";

interface MainBtnProps {
    text: string,
    clickHandler: () => void
}

const MainBtn = ({text, clickHandler}: MainBtnProps) => {
  return (
    <button className="bg-[var(--brand)] px-4 py-2 rounded text-white hover:scale-110 transition ease-in-out duration-150 shadow-xl"
    onClick={clickHandler}>
      {text}
    </button>
  );
};

export default MainBtn;
