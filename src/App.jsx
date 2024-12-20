import { useRef, useState } from "react";
import Intro from "./components/Intro";
import { useThrottle } from "./hooks/useThrottle";
import Meals from "./components/Meals";
import "./App.css";
import FondSection from "./components/FondSection";

function App() {
  const sections = [
    {
      id: "intro-section",
      section: <Intro />,
      bgColor: "#ffff",
    },
    {
      id: "meal-section",
      section: <Meals />,
      bgColor: "#c1c1c",
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
