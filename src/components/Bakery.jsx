import React from "react";
import domaceKifle from "../assets/kifle.jpg";
import lepinjaUrerni from "../assets/lepinja-u-rerni.jpg";
import lepinjaUrerni2 from "../assets/lepinja-u-rerni2.jpg";
import Simit from "../assets/simit.jpg";
import domaciHleb from "../assets/domaci-hleb.jpg";
import domacaLepinja from "../assets/domaca-lepinja.jpg";

const Bakery = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center gap-8 p-6 lg:w-3/4 mx-auto mb-10">
      <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">
        Hljeb, pogače, peciva
      </h2>
      <p className="text-lg">
        Nema ljepšeg mirisa u bošnjačkoj kuhinji od mirisa koji se širi dok se u
        kuhinji peče hljeb, pogače i različita peciva. Gotovo sve seoske i
        gradske sredine u Crnoj Gori imale su svoje vlastite recepte i naprosto
        su se takmičile u postizanju ljepšeg ukusa, ugodnijeg mirisa, mekoći,
        izgledu.
      </p>
      <p className="text-lg">
        Neke vrste peciva su: čurek, somun, bosman, kaplama, paklama, česnica,
        simit, pogače, čahije, lepinje, fodule, pitice, peksimeti, perece,
        đevreci, slani lokumi, kifle, paprnjaci, maslenice, puh – pecivo itd…
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="relative">
          <img
            src={domaceKifle}
            alt="Pecivo 1"
            className="w-full h-full object-cover rounded-lg shadow-lg"
          />
          <div className="absolute inset-0 bg-black opacity-30 rounded-lg"></div>
        </div>
        <div className="relative">
          <img
            src={lepinjaUrerni}
            alt="Pecivo 2"
            className="w-full h-full object-cover rounded-lg shadow-lg"
          />
          <div className="absolute inset-0 bg-black opacity-30 rounded-lg"></div>
        </div>
        <div className="relative">
          <img
            src={lepinjaUrerni2}
            alt="Pecivo 3"
            className="w-full h-full object-cover rounded-lg shadow-lg"
          />
          <div className="absolute inset-0 bg-black opacity-30 rounded-lg"></div>
        </div>
        <div className="relative">
          <img
            src={Simit}
            alt="Pecivo 4"
            className="w-full h-full object-cover rounded-lg shadow-lg"
          />
          <div className="absolute inset-0 bg-black opacity-30 rounded-lg"></div>
        </div>
        <div className="relative">
          <img
            src={domaciHleb}
            alt="Pecivo 5"
            className="w-full h-full object-cover rounded-lg shadow-lg"
          />
          <div className="absolute inset-0 bg-black opacity-30 rounded-lg"></div>
        </div>
        <div className="relative">
          <img
            src={domacaLepinja}
            alt="Pecivo 6"
            className="w-full h-full object-cover rounded-lg shadow-lg"
          />
          <div className="absolute inset-0 bg-black opacity-30 rounded-lg"></div>
        </div>
      </div>
    </div>
  );
};

export default Bakery;
