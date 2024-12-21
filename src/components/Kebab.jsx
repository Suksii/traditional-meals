import React from "react";
import Kebab from "../assets/cevapi.jpg";

const Meals = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center gap-10 p-6 lg:w-3/4 mx-auto">
      <div className="flex flex-col md:flex-row items-center gap-10">
        <div className="w-full md:w-1/2">
          <img
            src={Kebab}
            alt="Kebab"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>

        <div className="w-full md:w-1/2 space-y-5 md:space-y-10">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">
            Tipični sastojci bošnjačke kuhinje
          </h1>
          <p className="text-lg">
            Tipični sastojci jela bošnjačke kuhinje su paradajz, krompir, luk,
            bijeli luk, paprika, krastavci, šargarepa, kupus, gljive, spanać,
            tikvice i pasulj. Od začina najčešće se koristi mljevena paprika,
            biber, peršun, lovorov list i celer.
          </p>
          <p className="text-lg">
            Kao dodatak jelima u ovoj kuhinji često se koriste mlijeko, kajmak i
            pavlaka. Slatkim jelima se dodaju cimet i klinčić. Jela od mesa su
            od piletine, govedine ili jagnjetine.
          </p>
          <p className="text-lg">
            Za bošnjačku kuhinju specifično je pripremanje jela ispod sača, pri
            čemu se pripremljene namirnice, poklopljene metalnim zvonom,
            spremaju u žaru.
          </p>
        </div>
      </div>

      <div className=" space-y-5 md:space-y-10 w-full mx-auto">
        <p className="text-lg">
          Iako je tradicionalna bošnjačka kuhinja karakteristična po sporom
          načinu pripremanja jela, jako je zanimljivo da, uprkos svemu tome,
          možda i najpoznatije jelo u našim krajevima dolazi – sa roštilja.
        </p>
        <p className="text-lg">
          Riječ je o ćevapima, deliciji sačinjenoj od više vrsta mljevenoga
          mesa, najčešće posluženom s lukom i uz posebnu vrstu hljeba – somun.
          Naziv dolazi od turskog «kebapa» i danas ćevapa ima u gotovo svim
          balkanskim državama, ali najpoznatiji su upravo oni iz Bosne i
          Hercegovine.
        </p>
      </div>
    </div>
  );
};

export default Meals;
