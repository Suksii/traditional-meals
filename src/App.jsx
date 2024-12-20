import { useRef, useState } from "react";
import Intro from "./components/Intro";
import { useThrottle } from "./hooks/useThrottle";
import Meals from "./components/Meals";
import "./App.css";

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

  const throttledHandleScroll = useThrottle(handleScroll, 1000);

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
    <>
      <div
        className="w-full"
        onWheel={handleWheel}
        onKeyDown={handleKeyDown}
        tabIndex={0}
        style={{
          outline: "none",
          height: "100vh",
          overflow: "hidden",
        }}
      >
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
