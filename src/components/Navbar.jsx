import React, { useState } from "react";
import classNames from "classnames";
import { AnimatePresence, motion } from "framer-motion";

const Navbar = ({ sectionRefs, setCurrentIndex, currentIndex }) => {
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

  const [opened, setOpened] = useState(false);
  const handleClick = (index) => {
    setCurrentIndex(index);
    setOpened(false);
    sectionRefs.current[index]?.scrollIntoView({ behavior: "smooth" });
  };

  const itemVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.1, duration: 0.4 },
    }),
  };

  return (
    <>
      <nav className="fixed top-0 right-0 p-4 z-[55]">
        <div
          onClick={() => setOpened((prev) => !prev)}
          className={classNames(`tham tham-e-squeeze tham-w-8`, {
            "tham-active": opened,
          })}
        >
          <div className="tham-box">
            <div
              className={`tham-inner ${
                opened ? "bg-gray-100" : "bg-gray-900"
              } transition-colors`}
            />
          </div>
        </div>
      </nav>
      <AnimatePresence>
        {opened && (
          <motion.div
            className="fixed inset-0 z-[50] bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 text-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-50" />
            <motion.div
              className="flex flex-col justify-center items-end pr-16 h-screen"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.3 }}
            >
              {navMenu.map((item, index) => (
                <motion.div
                  key={item.id}
                  className="w-full md:w-1/2"
                  custom={index}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  variants={itemVariants}
                  onClick={() => handleClick(index + 1)}
                >
                  <p
                    className={`text-lg md:text-2xl py-2 font-semibold text-end ${
                      currentIndex === index + 1
                        ? "text-yellow-400 scale-105"
                        : ""
                    } hover:text-yellow-400 cursor-pointer transform hover:scale-105 transition duration-300`}
                  >
                    {item.name}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
