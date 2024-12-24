import React, { useState } from "react";
import classNames from "classnames";

const Navbar = ({ sectionRefs, setCurrentIndex }) => {
  const navMenu = [
    { id: "note-section", name: "Specifična nota bošnjačkih jela" },
    { id: "kebab-section", name: "Tipični sastojci bošnjačke kuhinje" },
    {
      id: "characteristics-section",
      name: "Pojedinačne i još neke karakteristike bošnjačke kuhinje",
    },
    { id: "coffee-section", name: "Bosanska kahva" },
    { id: "bakery-section", name: "Hljeb, pogače, peciva" },
    { id: "soup-section", name: "Čorbe" },
    { id: "pie-section", name: "Pite" },
    { id: "jardum-section", name: "Jardum" },
    { id: "jardum-peppers-section", name: "Paprike u Jardumu" },
    {
      id: "jufke-section",
      name: "Još nekoliko tradicionalnih jela sa istaknutim receptima",
    },
    { id: "about-section", name: "Rožajska kuhinja bošnjačkog življa" },
    { id: "kacamak-section", name: "Kačamak" },
    { id: "cevap-section", name: "Ćevap" },
    { id: "sac-section", name: "Tradicionalna jela ispod sača" },
    { id: "cheese-section", name: "Prirpema sira kod sandžačkih Bošnjaka" },
    { id: "sweets-section", name: "Slatka jela kod bošnjačkog naroda" },
  ];

  const [opened, setOpened] = useState(true);
  const handleClick = (index) => {
    setCurrentIndex(index);
    setOpened(true);
    sectionRefs.current[index]?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <nav className="fixed top-0 right-0 p-4 z-[55]">
        <div
          onClick={() => setOpened((prev) => !prev)}
          className={classNames(`tham tham-e-squeeze tham-w-8`, {
            "tham-active": !opened,
          })}
        >
          <div className="tham-box">
            <div
              className={`tham-inner ${
                opened ? "bg-gray-900" : "bg-gray-100"
              } transition-colors`}
            />
          </div>
        </div>
      </nav>
      <nav
        className={`fixed top-0 right-0 inset-0 z-[50] bg-gray-800 text-white ${
          opened ? "translate-x-full opacity-0" : "translate-x-0 opacity-100"
        } transition-all duration-300`}
      >
        <div className="flex flex-col justify-center h-screen">
          {navMenu.map((item, index) => (
            <div
              key={item.id}
              className={`flex justify-end w-full transition-opacity duration-500 ${opened ? "opacity-0 delay-0" : "opacity-100 delay-500"}`}
              onClick={() => handleClick(index + 1)}
            >
              <p className="md:text-2xl py-2 pr-8 font-semibold hover:bg-gray-50 hover:text-gray-800 cursor-pointer duration-300 w-full md:w-1/2 text-end">
                {item.name}
              </p>
            </div>
          ))}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
