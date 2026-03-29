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
    const numberOfStars = Math.floor(
      (window.innerWidth * window.innerHeight) / 10000
    );
    setStars(Array.from({ length: numberOfStars }, (_, i) => ({
      id: i,
      size: Math.random() * 3 + 1,
      x: Math.random() * 100,
      y: Math.random() * 100,
      opacity: Math.random() * 0.5 + 0.5,
      animationDuration: Math.random() * 4 + 2,
    })));
  };

  const generateMeteors = () => {
    setMeteors(Array.from({ length: 8 }, (_, i) => ({
      id: i,
      x: Math.random() * 120 - 10,
      y: Math.random() * 50 + 15,
      length: Math.random() * 180 + 80,
      thickness: Math.random() * 1.5 + 0.8,
      delay: Math.random() * 20,
      duration: Math.random() * 2.5 + 1.5,
      opacity: Math.random() * 0.5 + 0.5,
    })));
  };

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Twinkling stars */}
      {stars.map((star) => (
        <div
          key={star.id}
          className="star animate-pulse-subtle"
          style={{
            width: star.size + "px",
            height: star.size + "px",
            left: star.x + "%",
            top: star.y + "%",
            opacity: star.opacity,
            animationDuration: star.animationDuration + "s",
          }}
        />
      ))}

      {/* Space meteors */}
      {meteors.map((meteor) => (
        <div
          key={meteor.id}
          style={{
            position: "absolute",
            left: meteor.x + "%",
            top: meteor.y + "%",
            width: meteor.length + "px",
            height: meteor.thickness + "px",
            borderRadius: "999px",
            background: "linear-gradient(to right, rgba(255,255,255,0) 0%, rgba(180,220,255,0.3) 30%, rgba(220,240,255,0.85) 70%, rgba(255,255,255,1) 100%)",
            boxShadow: "0 0 6px 2px rgba(180,220,255,0.4), 0 0 12px 4px rgba(255,255,255,0.15)",
            opacity: meteor.opacity,
            transform: "rotate(-35deg)",
            transformOrigin: "right center",
            animationDelay: meteor.delay + "s",
            animationDuration: meteor.duration + "s",
            animationName: "spaceMeteor",
            animationTimingFunction: "linear",
            animationIterationCount: "infinite",
          }}
        />
      ))}
    </div>
  );
};
