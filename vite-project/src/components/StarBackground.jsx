import { useEffect, useState, useRef } from "react";

export const StarBackground = () => {
  const [stars, setStars] = useState([]);
  const [meteors, setMeteors] = useState([]);
  const [isDark, setIsDark] = useState(() =>
    document.documentElement.classList.contains("dark")
  );
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const bgRef = useRef(null);
  const starsRef = useRef(null);

  useEffect(() => {
    generateStars();
    generateMeteors();
    const handleResize = () => generateStars();
    window.addEventListener("resize", handleResize);

    const observer = new MutationObserver(() =>
      setIsDark(document.documentElement.classList.contains("dark"))
    );
    observer.observe(document.documentElement, { attributeFilter: ["class"] });

    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2;  // -1 to 1
      const y = (e.clientY / window.innerHeight - 0.5) * 2; // -1 to 1
      setMousePos({ x, y });
    };
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      observer.disconnect();
    };
  }, []);

  const generateStars = () => {
    const count = Math.floor((window.innerWidth * window.innerHeight) / 8000);
    setStars(Array.from({ length: count }, (_, i) => ({
      id: i,
      size: Math.random() * 3 + 1,
      x: Math.random() * 100,
      y: Math.random() * 100,
      twinkleDuration: Math.random() * 3 + 2,
      twinkleDelay: Math.random() * 5,
      parallaxSpeed: Math.random() * 15 + 5, // px shift per unit mouse move
    })));
  };

  const generateMeteors = () => {
    setMeteors(Array.from({ length: 8 }, (_, i) => ({
      id: i,
      x: Math.random() * 120 - 10,
      y: Math.random() * 60 - 10,
      length: Math.random() * 180 + 80,
      thickness: Math.random() * 2 + 1,
      delay: Math.random() * 18,
      duration: Math.random() * 2.5 + 1.5,
      opacity: Math.random() * 0.5 + 0.5,
    })));
  };

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">

      {/* Background image — dark mode: Firefly, light mode: plain */}
      {isDark ? (
        <>
          {/* Parallax bg layer */}
          <div
            ref={bgRef}
            style={{
              position: "absolute",
              inset: "-8%",
              backgroundImage: "url('/projects/Firefly.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              animation: "bgZoom 16s ease-in-out infinite alternate",
              transformOrigin: "center center",
              transform: `translate(${mousePos.x * -12}px, ${mousePos.y * -12}px)`,
              transition: "transform 0.12s ease-out",
            }}
          />
          {/* Overlay */}
          <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.4)" }} />
        </>
      ) : null}

      {/* Twinkling stars with parallax — dark mode only */}
      {isDark && stars.map((star) => (
        <div
          key={star.id}
          style={{
            position: "absolute",
            width: star.size + "px",
            height: star.size + "px",
            left: `calc(${star.x}% + ${mousePos.x * -star.parallaxSpeed * 0.3}px)`,
            top: `calc(${star.y}% + ${mousePos.y * -star.parallaxSpeed * 0.3}px)`,
            borderRadius: "50%",
            background: "white",
            boxShadow: `0 0 ${star.size * 3}px ${star.size}px rgba(255,255,255,0.6)`,
            animation: `twinkle ${star.twinkleDuration}s ease-in-out ${star.twinkleDelay}s infinite`,
            transition: "left 0.1s ease-out, top 0.1s ease-out",
          }}
        />
      ))}

      {/* Space meteors — diagonal streaks with glowing tail */}
      {isDark && meteors.map((meteor) => (
        <div
          key={meteor.id}
          style={{
            position: "absolute",
            left: meteor.x + "%",
            top: meteor.y + "%",
            width: meteor.length + "px",
            height: meteor.thickness + "px",
            borderRadius: "999px",
            background: `linear-gradient(to right,
              rgba(255,255,255,0) 0%,
              rgba(180,220,255,0.3) 30%,
              rgba(220,240,255,0.85) 70%,
              rgba(255,255,255,1) 100%)`,
            boxShadow: `0 0 6px 2px rgba(180,220,255,0.4), 0 0 12px 4px rgba(255,255,255,0.15)`,
            opacity: meteor.opacity,
            transform: "rotate(-35deg)",
            transformOrigin: "right center",
            animation: `spaceMeteor ${meteor.duration}s linear ${meteor.delay}s infinite`,
          }}
        />
      ))}
    </div>
  );
};