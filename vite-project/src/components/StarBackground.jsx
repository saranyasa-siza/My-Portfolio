import { useEffect, useState } from "react";

export const StarBackground = () => {
  const [stars, setStars] = useState([]);
  const [meteors, setMeteors] = useState([]);

  useEffect(() => {
    generateStars();
    generateMeteors();
    const handleResize = () => generateStars();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const generateStars = () => {
    const count = Math.floor((window.innerWidth * window.innerHeight) / 8000);
    setStars(Array.from({ length: count }, (_, i) => ({
      id: i,
      size: Math.random() * 3 + 1,
      x: Math.random() * 100,
      y: Math.random() * 100,
      opacity: Math.random() * 0.6 + 0.4,
      twinkleDuration: Math.random() * 3 + 2,
      twinkleDelay: Math.random() * 5,
    })));
  };

  const generateMeteors = () => {
    setMeteors(Array.from({ length: 6 }, (_, i) => ({
      id: i,
      size: Math.random() * 2 + 1,
      x: Math.random() * 100,
      y: Math.random() * 30,
      delay: Math.random() * 20,
      duration: Math.random() * 3 + 3,
    })));
  };

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Space background with zoom effect */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: "url('/projects/space2.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          animation: "bgZoom 20s ease-in-out infinite alternate",
          transformOrigin: "center center",
        }}
      />
      {/* Dark overlay so text stays readable */}
      <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.45)" }} />

      {/* Twinkling stars */}
      {stars.map((star) => (
        <div
          key={star.id}
          style={{
            position: "absolute",
            width: star.size + "px",
            height: star.size + "px",
            left: star.x + "%",
            top: star.y + "%",
            borderRadius: "50%",
            background: "white",
            boxShadow: `0 0 ${star.size * 3}px ${star.size}px rgba(255,255,255,0.6)`,
            animation: `twinkle ${star.twinkleDuration}s ease-in-out ${star.twinkleDelay}s infinite`,
          }}
        />
      ))}

      {/* Meteors */}
      {meteors.map((meteor) => (
        <div
          key={meteor.id}
          style={{
            position: "absolute",
            width: meteor.size * 60 + "px",
            height: meteor.size * 2 + "px",
            left: meteor.x + "%",
            top: meteor.y + "%",
            borderRadius: "50%",
            background: "linear-gradient(to right, white, rgba(255,255,255,0.6), transparent)",
            boxShadow: "0 0 8px 2px rgba(255,255,255,0.3)",
            animation: `meteor ${meteor.duration}s linear ${meteor.delay}s infinite`,
          }}
        />
      ))}
    </div>
  );
};