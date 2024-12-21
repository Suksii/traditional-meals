import { useRef, useState } from "react";
import Intro from "./components/Intro";
import { useThrottle } from "./hooks/useThrottle";
import Meals from "./components/Meals";
import "./App.css";
import FondSection from "./components/FondSection";
import FooterSection from "./components/FooterSection";
import traditionalMeals from "./assets/traditional-meals.png";
import Kebab from "./assets/cevapi.jpg";
import Kahva from "./assets/coffee.jpg";

function App() {
  const sections = [
    {
      id: "intro-section",
      section: <Intro />,
      bgColor: "#ffff",
    },
    {
      id: "meal-section",
      section: (
        <Meals
          title={"Specifična nota bošnjačkih jela"}
          descriptions={[
            {
              id: 1,
              description:
                "Specifičnu notu bošnjačkim jelima daju i prehrambeni običaji koji svoje izvorište imaju u islamu. Tako je savremena izvorna bošnjačka hrana dio kulturno-istorijskog nasljeđa i mješavina je autentičnih jela.",
            },
            {
              id: 2,
              description:
                "Specifičnost i vrijednost bošnjačkih jela je baš u tom orijentalnom i zapadnjačkom, a i vjerskom nasljeđu. Zbog toga se danas ova kuhinja puno razlikuje od arapske, austrijske, mađarske, ali i od turske i arapske bez obzira što postoje jela koja potiču kako iz Turske i drugih kuhinja.",
            },
            {
              id: 3,
              description:
                " Bošnjačka jela i dalje ostaju karakteristična, jer se prenose sa koljena na koljeno. U kulturi ishrane, kao i prehrambenim običajima se najjasnije odražavaju tragovi različitih kultura koje su se u sredinama gdje žive Bošnjaci najsnažnije isprepletale.",
            },
            {
              id: 4,
              description:
                "Tradicionalno bošnjačko jelo može biti i izvorno, ali i jelo koje je tokom istorije došlo iz druge kulture pa se kod nas priprema na poseban i specifičan način. U tradicionalnoj našoj kuhinji večera je glavni obrok i po obilnostima ima sličnosti sa francuskom večerom dok je ručak manje obilato jelo.",
            },
            {
              id: 5,
              description:
                "Autentični objekti u kojima se služe tradicionalna ishrana su aščinice, ćevabdžinice i buregdžinice. U tradicionalnoj bošnjačkoj kuhinji koristi se i posebno suđe. Takvi su sač, peka, dagara, pršulja, lonac, tepsija itd.",
            },
          ]}
          image={traditionalMeals}
        />
      ),
      bgColor: "#ccccc",
    },
    {
      id: "kebab-section",
      section: (
        <Meals
          title={"Tipični sastojci bošnjačke kuhinje"}
          descriptions={[
            {
              id: 1,
              description:
                "Tipični sastojci jela bošnjačke kuhinje su paradajz, krompir, luk, bijeli luk, paprika, krastavci, šargarepa, kupus, gljive, spanać, tikvice i pasulj. Od začina najčešće se koristi mljevena paprika, biber, peršun, lovorov list i celer.",
            },
            {
              id: 2,
              description:
                "Kao dodatak jelima u ovoj kuhinji često se koriste mlijeko, kajmak i pavlaka. Slatkim jelima se dodaju cimet i klinčić. Jela od mesa su od piletine, govedine ili jagnjetine.",
            },
            {
              id: 3,
              description:
                "Za bošnjačku kuhinju specifično je pripremanje jela ispod sača, pri čemu se pripremljene namirnice, poklopljene metalnim zvonom, spremaju u žaru.",
            },
            {
              id: 4,
              description:
                "Iako je tradicionalna bošnjačka kuhinja karakteristična po sporom načinu pripremanja jela, jako je zanimljivo da, uprkos svemu tome, možda i najpoznatije jelo u našim krajevima dolazi – sa roštilja.",
            },
            {
              id: 5,
              description:
                "Riječ je o ćevapima, deliciji sačinjenoj od više vrsta mljevenoga mesa, najčešće posluženom s lukom i uz posebnu vrstu hljeba – somun. Naziv dolazi od turskog «kebapa» i danas ćevapa ima u gotovo svim balkanskim državama, ali najpoznatiji su upravo oni iz Bosne i Hercegovine.",
            },
          ]}
          image={Kebab}
        />
      ),
      bgColor: "#ccccc",
    },
    {
      id: "characteristics-section",
      section: (
        <Meals
          title={"Pojedinačne i još neke karakteristike bošnjačke kuhinje"}
          list={[
            {
              id: 1,
              description:
                "• Sofranska pečenja gotovo uvijek su punjena zelenim i drugim prilozima",
            },
            {
              id: 2,
              description:
                "• Velika upotreba domaćih sirovina, kao slatkog kajmaka, jabuka, pekmeza, meda itd.",
            },
            {
              id: 3,
              description:
                "• Značajno mjesto zauzima peceno meso na žaru ucijelo, ili u komadima ovo se naročito odnosi na jagnjetinu.",
            },
            {
              id: 4,
              description:
                "• Značajno mjesto zauzima i kuhano meso ili sa povrćem.",
            },
            {
              id: 5,
              description:
                "• Corba je u pravilu osnova ili dodatak mnogih (kuhanih) jela i. Karakeristika gustih (corbi), koje u vecini slucajeva sadrze jednu ili vise vrsta povrca i zacina, a takođe i komadice mesa. U corbi su obavezni persunovo lisce i meso. Čorbe fungiraju i kao samostalno jelo i kao SUPE, na pocetku, u sredini i na kraju obroka.",
            },
            {
              id: 6,
              description:
                "• Znacajno mjesto u jelovniku zauzimaju pite, kako slane, tako i slatke. Obavezni su dodak svakog slozenijeg obroka u kojem je obavezno slaganje, pita i pecenja.",
            },
            {
              id: 7,
              description:
                "• Velika je upotreba nekih dodataka u samim jelima, kao luka, persuna i drugih zacina, te masla i ukuhanog paradajza. ",
            },
            {
              id: 8,
              description:
                "• Mnoga jela zacinjavaju se slatkim kajmakom i slatkim mlijekom te na taj nacin dobijaju poseban sos u jelima.",
            },
            {
              id: 9,
              description:
                "• Salate imaju svoje određene specific nosti, mnogo se upotrebljava kiselo mlijeko i prilozi koji imaju funkciju salata.",
            },
            {
              id: 10,
              description:
                "• Za razne poslastice upotrebljavaju se pekmezi , dakle, vocni seceri, s to je narocito znacajno i za ishranu savremenog covjeka.",
            },
            {
              id: 11,
              description:
                "• U bošnjačkoj kuhinji postoji jedno zajednicko pravilo za sva jela, i to: ako vam je nesto suho , zavisno od ukusa, treba ga zaliti da bi postalo socno i meko, ili ga treba zaliti nekim prelivom (maslacem i mlijekom, povlakom i slicno) da bi postalo pihtijasto. Zalijeva se i pita (opet zavisno od ukusa) mlijekom i maslacem, povlakom i maslom. ",
            },
            {
              id: 12,
              description:
                "• Posebnu grupu jela cini tzv. meze, koje se servira uz pice kod vecernjih sjedjeljki. Meze se moze sastojati iz obicnog priloga, kisele ili druge corbe sa komadic ima mesa te do najslozenijih dinstanih jela.",
            },
          ]}
          image={Kebab}
        />
      ),
      bgColor: "#ccccc",
    },
    {
      id: "coffee-section",
      section: (
        <Meals
          title="Bosanska kahva – nezaobilazna kod Bošnjaka u svakodnevnoj upotrebi"
          descriptions={[
            {
              id: 1,
              description:
                "Što se tiče pića, u životu Bošnjaka i Bosne I Crne Gore u cjelini kahva ima svoju nezamjenjivu ulogu. Vjekovima su Bošnjaci stvarali kult kahve usavršavajući mljevenje, kuhanje, služenje i pijenje kahve do najsuptilnijih detalja. Kahva je postala integralni dio svih drugih običaja, ali i samoj sebi svojstven običaj.",
            },
            {
              id: 1,
              description:
                "Priprema kahve počinje prženjem i mljevenjem, a tek se onda kuha. Dobro samljevena kahva zaspe se u već malo zagrijanu džezvu. Ključalom vodom se zatim zalije (ali se ne prepuni), dobro promiješa i vrati na vatru da se 'digne' do vrha džezve, no ne smije prekipjeti. Nakon što kratko 'odstoji' da se slegne, ljeva se u findžane (šolje). Šećer i mlijeko se serviraju posebno i dodaju po želji.",
            },
          ]}
          image={Kahva}
        />
      ),
    },
  ];

  const sectionRefs = useRef([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleScroll = (direction) => {
    let newIndex = currentIndex;

    if (direction === "down" && currentIndex < sections.length - 1) {
      newIndex = currentIndex + 1;
    } else if (direction === "up" && currentIndex > 0) {
      newIndex = currentIndex - 1;
    }

    setCurrentIndex(newIndex);
    sectionRefs.current[newIndex]?.scrollIntoView({ behavior: "smooth" });
  };

  const throttledHandleScroll = useThrottle(handleScroll, 500);

  const handleWheel = (e) => {
    e.preventDefault();
    if (e.deltaY > 0) {
      throttledHandleScroll("down");
    } else {
      throttledHandleScroll("up");
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "ArrowDown") {
      throttledHandleScroll("down");
    } else if (e.key === "ArrowUp") {
      throttledHandleScroll("up");
    }
  };

  return (
    <div className="relative">
      <div className="absolute top-0 left-0 w-full z-50">
        <FondSection />
      </div>
      <div className="absolute bottom-0 left-0 w-full z-50">
        <FooterSection />
      </div>
      <div
        className="w-full"
        onWheel={handleWheel}
        onKeyDown={handleKeyDown}
        tabIndex={0}
        style={{ overflow: "hidden", outline: "none" }}
      >
        {sections.map((section, index) => (
          <div
            key={section.id}
            ref={(el) => (sectionRefs.current[index] = el)}
            id={section.id}
            className="min-h-screen"
            style={section.bgColor ? { backgroundColor: section.bgColor } : {}}
          >
            {section.section}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
