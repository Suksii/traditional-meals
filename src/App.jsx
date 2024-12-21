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
import Bakery from "./components/Bakery";
import Soup from "./assets/supa.jpg";
import Sofra from "./assets/sofra.jpg";
import CheesePie from "./assets/pita-sir.jpg";
import CheesePie2 from "./assets/pita-sir2.jpg";
import GreensPie from "./assets/pita-zelje.jpg";
import domaceKifle from "./assets/kifle.jpg";
import lepinjaUrerni from "./assets/lepinja-u-rerni.jpg";
import lepinjaUrerni2 from "./assets/lepinja-u-rerni2.jpg";
import Simit from "./assets/simit.jpg";
import domaciHleb from "./assets/domaci-hleb.jpg";
import domacaLepinja from "./assets/domaca-lepinja.jpg";
import Jardum from "./assets/jardum.png";
import JardumPaprike from "./assets/jardum1.png";
import Jufke from "./assets/jufke.png";
import Jufke1 from "./assets/jufke1.png";

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
          image={{
            src: traditionalMeals,
            alt: "Jela iz bošnjačke kuhinje",
            desc: "Jela iz bošnjačke kuhinje",
          }}
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
          image={{
            src: Kebab,
            alt: "Ćevapi",
            desc: "Fotografisano u jednoj od novih podgoričkih ćevabdžinica",
          }}
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
          image={{
            src: Sofra,
            alt: "Bošnjačka sofra",
            desc: "Bošnjačka sofra",
          }}
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
          image={{
            src: Kahva,
            alt: "Bosanska kahva",
            desc: "Bosanska kahva, na slici fildžan (džezva) i šoljice",
          }}
        />
      ),
    },
    {
      id: "bakery-section",
      section: (
        <Bakery
          title={"Hljeb, pogače, peciva"}
          descriptions={[
            {
              id: 1,
              description:
                "Nema ljepšeg mirisa u bošnjačkoj kuhinji od mirisa koji se širi dok se u kuhinji peče hljeb, pogače i različita peciva. Gotovo seoske i gradske sredine u Crnoj Gori imale su svoje vlas recepte i naprosto su se takmičile u postizanju ljepšeg ukusa, ugodn mirisa, mekoći, izgledu.",
            },
            {
              id: 2,
              description:
                "Neke vrste peciva su: čurek, somun, bosman, kaplama, paklama, česnica, simit, pogače, čahije, lepinje, fodule, pit peksimeti, perece, đevreci, slani lokumi, kifle, paprnjaci, maslenice, puh – pecivo itd…",
            },
          ]}
          images={[
            {
              image: domacaLepinja,
              alt: "Domaća lepinja",
              desc: "Domaća lepinja",
            },
            {
              image: domaceKifle,
              alt: "Domaće kifle",
              desc: "Domaće kifle",
            },
            {
              image: domaciHleb,
              alt: "Domaći hleb",
              desc: "Domaći hleb",
            },
            {
              image: Simit,
              alt: "Simit",
              desc: "Simit",
            },
            {
              image: lepinjaUrerni,
              alt: "Lepinja u rerni",
              desc: "Domaća lepinja u rerni",
            },
            {
              image: lepinjaUrerni2,
              alt: "Lepinja u rerni ",
              desc: "Domaća lepinja u rerni",
            },
          ]}
        />
      ),
    },
    {
      id: "soup-section",
      section: (
        <Meals
          title="Čorbe"
          descriptions={[
            {
              id: 1,
              description:
                "Čorbe u svakodnevnoj tradicionalnoj ishrani Bošnjaka, čorbe zauzimaju značajno mjesto. Za razliku od blagih supa, obično se prave jače začinjene, s više masnoće, guste i hranjive, najčešće sa mesom ili sa jačim dodacima, kao što su povrće, tjestenina, jaja i slično. Iako se obavezno jedu uz glavno jelo, prije ili poslije glavnog jela , čorbe egzistiraju i kao samostalna jela, koja se uzimaju za doručak. Tada se, po pravilu, stavljaju  nagusto, od komadića mesa, priređene na mnogobrojne načine: s telećim goveđim, jagnjećim ili kokošijim mesom izmiješanim s bamijom i povrćem, tjesteninom i rižom i obavezno začinjenim raznim mirođijama i uzavrelim mladim maslom.",
            },
          ]}
          image={{ src: Soup, alt: "Begova čorba", desc: "Begova čorba" }}
        />
      ),
    },
    {
      id: "pie-section",
      section: (
        <Bakery
          title={"Pite"}
          descriptions={[
            {
              id: 1,
              description:
                "U bošnjačkoj kuhinji pite se smatraju prelaznim jelima i prave se na 1001 način. Pite se smjenjuju s dolmama, ćevapima i sličnim jelima i neizostavne su u svakodnevnoj ishrani. Mogu biti slane, poluslane, kisele i slatke. Iako su najpoznatije burek-pite, sa sirom, zeljem, tikvom, krompriom... pite se prave, takoreći, od “svega”.",
            },
          ]}
          images={[
            {
              image: CheesePie,
              alt: "Pita sa sirom - sirnica",
              desc: "Pita sa sirom - sirnica",
            },
            {
              image: CheesePie2,
              alt: "Pita sa sirom - sirnica",
              desc: "Pita sa sirom - sirnica",
            },
            {
              image: GreensPie,
              alt: "Pita sa zeljem - zeljanuša",
              desc: "Pita sa zeljem - zeljanuša",
            },
          ]}
        />
      ),
    },
    {
      id: "jardum-section",
      section: (
        <Meals
          title="Jardum"
          descriptions={[
            {
              id: 1,
              description:
                "Ovčje mlijeko posoliti po ukusu i staviti da se kuha na tihoj - umjerenoj vatri uz neprestano miješanje, dok se čitava površina ne prekrije pjenom. Tada se posuda skida sa vatre da se hladi. Ovo mlijeko je, kada se ohladi, veoma gusto i ukusno. Obično se služi na kraju jela.",
            },
          ]}
          image={{
            src: Jardum,
            alt: "Jardum",
            desc: "Jardum",
          }}
        />
      ),
    },
    {
      id: "jardum-peppers-section",
      section: (
        <Meals
          title="Paprike u Jardumu"
          descriptions={[
            {
              id: 1,
              description:
                "Paprike oprati, izvaditi im drške i složiti ih u drvenu posudu da stoje 2-3 dana. Zatim naliti ovčju vareniku (jardum), malo posoliti i ostaviti da tako stoji 15-20 dana. Služiti tek nakon isteka tog vremena.",
            },
          ]}
          image={{
            src: JardumPaprike,
            alt: "Paprike u Jardumu",
            desc: "Paprike u Jardumu",
          }}
        />
      ),
    },
    {
      id: "jufke-section",
      section: (
        <Meals
          title="Evo još nekoliko tradicionalnih jela sa istaknutim receptima bošnjačkog naroda"
          descriptions={[
            {
              id: 1,
              description: (
                <span>
                  <b>Priganice:</b> U mlakoj, blago posoljenoj vodi kuhati
                  tijesto od pšeničnog brašna dok ne postane malo gušće od
                  kašastog. U dobro ugrijano ulje u tiganju kašikom stavljati
                  pomalo tijesta, tako da pliva u masnoći. Tijesto ne treba
                  puštati da nadolazi. Kad priganica porumeni sa obje strane,
                  vadi se iz tiganja i servira sa medom.
                </span>
              ),
            },
            {
              id: 2,
              description: (
                <span>
                  <b>Cicvara:</b> U rastopljeno maslo doliti duplo veću količinu
                  tople vode, a onda sipati kukuruzno brašno i neprestano
                  miješati kašikom dok se cicvara ne zgusne. Skuhanu cicvara
                  služiti u tanjirima. Tarhana: U posudu staviti vodu da se
                  grije. U tepsiji pomalo kvasiti pšenično brašno i trljati
                  dlanom o dlan dok se ne naprave mrvice. Sitom prosijati brašno
                  a ostatke ugrušanih mrvica iz sita sipati u vodu, dodati
                  rastopljeno maslo, jaja i so po želji. Tarhana se kuha dok se
                  ne zgusne i provri.
                </span>
              ),
            },
            {
              id: 3,
              description: (
                <span>
                  <b>Popara sa sirom:</b> Komadiće dobro skorelog hljeba ubaciti
                  na kratko u posudu sa vrelom vodom da se omekšaju i odmah
                  procijediti, tako da sva voda istekne. Poparu začiniti
                  istopljenim maslom u koji je dodat tvrdi planinski sir. Služi
                  se sa kisjelim mlijekom. Tajna dobre popare je u tome što
                  komadiće hljeba ne treba previše izlagati dejstvu vrele vode.
                </span>
              ),
            },
          ]}
          image={{
            src: Jufke,
            alt: "Jufke",
            desc: "Priprema Jufki",
          }}
        />
      ),
    },
    {
      id: "about-section",
      section: (
        <Meals
          title="Rožajska kuhinja bošnjačkog življa"
          descriptions={[
            {
              id: 1,
              description:
                "Stariji ljudi koji su podosta svijeta obišli tvrde da nigdje nema ukusnijeg sira, mesa i mlijeka no sa Pešteri i rožajskih planina, niti ljepšega hljeba od rožajskog i novopazarskog. Turski sultan je za to čuo i neredio je pekarima da mu ispeku takav hljeb, a oni mu odgovoriše: “Čestiti care, učini da u blizini Istanbula izviru Ibar i Raška, pa će i naš hljeb biti kao rožajski i novopazarski, jer je taj ukus od vode! ",
            },
            {
              id: 2,
              description:
                "Rožajci su tradicionalno gostoprimljiv narod, dobri i pažljivi domaćini. U prošlosti je svaka imućnija kuća imala musafirsku (gostinsku) sobu. U gostinskoj sobi niko od ukućana obično nije spavao, već je ta soba bila uredno pospremljena da u svako doba dana i noći prihvati gosta - namjernika. Po tradiciji bi se na sofru (sto za ručavanje) postavljala kašika više za mogućeg gosta, a kada bi se dočekivao gost širom bi se otvarala visoka avlijska kapija. Gost se smještao “na vrh sobe”, na najbolje i najpreglednije mjesto, i bio bi nuđen najboljom hranom i pićem koji bi se našli u kući, jer je vladalo uvjerenje da se gost ne smije pustiti da ode iz kuće gladan. Domaćin i svi ukućani bi se trudili da se gost osjeća prijatno “kao kod svoje kuće”.",
            },
          ]}
          image={{
            src: Jufke1,
            alt: "Jufke sa suhim mesom",
            desc: "Jufke sa suhim mesom",
          }}
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
            className="md:min-h-screen"
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
