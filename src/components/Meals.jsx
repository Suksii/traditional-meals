import React, { useRef, useState } from "react";
import { useThrottle } from "../hooks/useThrottle"
import Intro from "./Intro";

const SmoothScrollSections = () => {
  const sections = [
    { id: "section-1", label: <Intro /> },
    { id: "section-2", label: <Intro /> },
    { id: "section-3", label: <Intro /> },
    { id: "section-4", label: <Intro /> },
    { id: "section-5", label: <Intro /> },
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
    e.preventDefault(); // Sprečava standardno skrolovanje
    if (e.deltaY > 0) {
      throttledHandleScroll("down");
    } else {
      throttledHandleScroll("up");
    }
  };

  return (
    <div
      onWheel={handleWheel}
      tabIndex={0}
      style={{
        outline: "none",
        height: "100vh",
      }}
    >
      {sections.map((section, index) => (
        <div
          key={section.id}
          ref={(el) => (sectionRefs.current[index] = el)}
          id={section.id}
          style={{
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            background: index % 2 === 0 ? "lightblue" : "lightgray",
            border: "1px solid black",
          }}
        >
          {section.label}
        </div>
      ))}
    </div>
  );
};

export default SmoothScrollSections;
