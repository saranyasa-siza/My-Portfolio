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
    setMeteors(Array.from({ length: 4 }, (_, i) => ({
      id: i,
      size: Math.random() * 2 + 1,
      x: Math.random() * 100,
      y: Math.random() * 20,
      delay: Math.random() * 15,
      animationDuration: Math.random() * 3 + 3,
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
              inset: "-5%",
              backgroundImage: "url('/projects/Firefly.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              animation: "bgZoom 20s ease-in-out infinite alternate",
              transformOrigin: "center center",
              transform: `translate(${mousePos.x * -12}px, ${mousePos.y * -12}px)`,
              transition: "transform 0.1s ease-out",
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

      {/* Meteors — dark mode only, original behavior */}
      {isDark && meteors.map((meteor) => (
        <div
          key={meteor.id}
          className="meteor animate-meteor"
          style={{
            width: meteor.size * 50 + "px",
            height: meteor.size * 2 + "px",
            left: meteor.x + "%",
            top: meteor.y + "%",
            animationDelay: meteor.delay + "s",
            animationDuration: meteor.animationDuration + "s",
          }}
        />
      ))}
    </div>
  );
};