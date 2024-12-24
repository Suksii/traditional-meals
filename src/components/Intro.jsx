import React from "react";
import TraditionalMeal from "../assets/traditional-meal.png";
import { motion } from "framer-motion";
import BgImage from "../assets/bg-image.jpg";
const Intro = () => {
  return (
    <div
      className="min-h-screen bg-blue-100 w-full flex flex-col justify-center items-center bg-no-repeat bg-cover relative"
      style={{ backgroundImage: `url(${BgImage})` }}
    >
      <motion.div
        className="absolute inset-0 bg-black bg-opacity-50"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.5 }}
        transition={{ duration: 1 }}
      ></motion.div>
      <motion.h1
        className="text-2xl md:text-3xl font-semibold text-center py-10 text-white z-10"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        Tradicijom do digitalizacije
      </motion.h1>
      <div className="w-full md:w-2/3 px-4 text-center space-y-12 text-white z-10">
        <motion.p
          className="text-lg md:text-xl"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Cilj ovog projekta je isključivo promocija bošnjačke kulture I
          tradicije kroz nacionalnu kuhinju. Svjedoci smo da ljudima prezentuju
          I promovišu razni trendovi koje dovode do gubitka fundamentalnih
          vrijednosti karekterističnih za naš narod. Ovaj projekat ima za cilj
          preciznu klasifikaciju I sistematsku obradu ove teme kako bi se na
          slikovit način prikazala bošnjačka tradicija te ukazalo na razlike koj
          epostoje u odnosu na druge narode u Crnoj Gori. Pored toga, cilj ovog
          projekta je digitalizacija I povećane dostupnosti široj masi, te kroz
          upotrenu savremenih alatki ostvarivanje fundamentalnih ciljeva u
          očuvanju bošnjačkog nacionalnog identiteta. Digtalizacijom mladim
          ljudima olakšavamo pristup čime se ostvaruje cilj podizanja svijesti I
          interesovanja kod ove populacije za ovim segmentom tradicije.
        </motion.p>
        <motion.p
          className="text-lg md:text-xl"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
        >
          Lice zaduženo u okviru ove aktivnosti je Fetahović Ernad koji je
          obavljao razgovore i susrete sa pripadnicima starije populacije koji
          posjeduju znanja i vještine iz ove oblasti. Nalon toga izvršio je
          preciznu selekciju sadržaja i formirao recepate sa istaknutim
          specifičnostima za pojedina nacionalna jela.
        </motion.p>
      </div>
    </div>
  );
};

export default Intro;
