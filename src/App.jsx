import { useRef, useState } from "react";
import "./App.css";
import Meals from "./components/Meals";
import Intro from "./components/Intro";

function App() {
  const sections = [
    {
      id: "intro-section",
      section: <Intro />,
    },
    {
      id: "meal-section",
      section: <Intro />,
    },
    ,
    {
      id: "section-3",
      section: <Intro />,
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

  const handleWheel = (e) => {
    e.preventDefault();
    if (e.deltaY > 0) {
      handleScroll("down");
    } else {
      handleScroll("up");
    }
  };

  return (
    <>
      <div className="w-full" onWheel={handleWheel} tabIndex={0}>
        {sections.map((section, index) => (
          <div
            key={section.id}
            ref={(el) => (sectionRefs.current[index] = el)}
            id={section.id}
          >
            {section.section}
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
