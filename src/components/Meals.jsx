import React from "react";
import traditionalMeals from "../assets/traditional-meals.png";

const Meals = () => {
  return (
    <div className="min-h-screen flex flex-col gap-10 p-6">
      <div className="flex flex-col md:flex-row items-center gap-10">
        <div className="w-full md:w-1/2">
          <img
            src={traditionalMeals}
            alt="Tradicija bošnjačkih jela"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>

        <div className="w-full md:w-1/2 space-y-10">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">
            Specifična nota bošnjačkih jela
          </h1>
          <p className="text-lg">
            Specifičnu notu bošnjačkim jelima daju i prehrambeni običaji koji
            svoje izvorište imaju u islamu. Tako je savremena izvorna bošnjačka
            hrana dio kulturno-istorijskog nasljeđa i mješavina je autentičnih
            jela.
          </p>
          <p className="text-lg">
            Specifičnost i vrijednost bošnjačkih jela je baš u tom orijentalnom
            i zapadnjačkom, a i vjerskom nasljeđu. Zbog toga se danas ova
            kuhinja puno razlikuje od arapske, austrijske, mađarske, ali i od
            turske i arapske bez obzira što postoje jela koja potiču kako iz
            Turske i drugih kuhinja.
          </p>
          <p className="text-lg">
            Bošnjačka jela i dalje ostaju karakteristična, jer se prenose sa
            koljena na koljeno. U kulturi ishrane, kao i prehrambenim običajima
            se najjasnije odražavaju tragovi različitih kultura koje su se u
            sredinama gdje žive Bošnjaci najsnažnije isprepletale.
          </p>
        </div>
      </div>

      <div className="space-y-10 w-full md:w-3/4 mx-auto">
        <p className="text-lg">
          Tradicionalno bošnjačko jelo može biti i izvorno, ali i jelo koje je
          tokom istorije došlo iz druge kulture pa se kod nas priprema na
          poseban i specifičan način. U tradicionalnoj našoj kuhinji večera je
          glavni obrok i po obilnostima ima sličnosti sa francuskom večerom dok
          je ručak manje obilato jelo.
        </p>
        <p className="text-lg">
          Autentični objekti u kojima se služe tradicionalna ishrana su
          aščinice, ćevabdžinice i buregdžinice. U tradicionalnoj bošnjačkoj
          kuhinji koristi se i posebno suđe. Takvi su sač, peka, dagara,
          pršulja, lonac, tepsija itd.
        </p>
      </div>
    </div>
  );
};

export default Meals;
