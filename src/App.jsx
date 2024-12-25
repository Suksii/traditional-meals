import { useRef, useState, useEffect } from "react";
import { useThrottle } from "./hooks/useThrottle";
import "./App.css";
import { sections } from "./constants/constants";
import FondSection from "./components/FondSection";
import FooterSection from "./components/FooterSection";
import Navbar from "./components/Navbar";

function App() {
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
    const currentSection = sectionRefs.current[currentIndex];
    if (!currentSection) return;

    const rect = currentSection.getBoundingClientRect();
    const isAtTop = rect.top >= 0;
    const isAtBottom = rect.bottom <= window.innerHeight;

    e.preventDefault();
    if (e.deltaY > 0 && isAtBottom) {
      throttledHandleScroll("down");
    } else if (e.deltaY < 0 && isAtTop) {
      throttledHandleScroll("up");
    }
  };

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const visibleIndex = sectionRefs.current.findIndex(
            (ref) => ref === entry.target
          );
          if (visibleIndex !== -1) {
            setCurrentIndex(visibleIndex);
          }
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    sectionRefs.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative">
      <div className="absolute top-0 left-0 w-full z-50">
        <FondSection />
      </div>
      <div className="absolute bottom-0 left-0 w-full z-50">
        <FooterSection />
        <div className="text-center text-gray-800 pb-2">
          Sajt izradio: <span className="font-semibold">Jašar Ćatović</span>
        </div>
      </div>
      <Navbar sectionRefs={sectionRefs} setCurrentIndex={setCurrentIndex} />
      <div
        className="w-full overflow-y-auto"
        onWheel={handleWheel}
        tabIndex={0}
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
