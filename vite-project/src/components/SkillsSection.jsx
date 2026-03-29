import { useState, useEffect, useRef } from "react";

const skills = [
  {
    name: "Git & GitHub",
    description: "Version control and collaboration workflows for modern development.",
    tags: ["commits", "branches", "workflows"],
    color: { glow: "34,197,94", title: "#4ade80", border: "rgba(34,197,94,0.25)", tagBorder: "rgba(74,222,128,0.35)", tagBg: "rgba(34,197,94,0.08)" },
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="46" height="46">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
      </svg>
    ),
  },
  {
    name: "HTML",
    description: "Semantic structure and meaningful markup for the web.",
    tags: ["semantic", "structure", "a11y"],
    color: { glow: "249,115,22", title: "#fb923c", border: "rgba(249,115,22,0.25)", tagBorder: "rgba(251,146,60,0.35)", tagBg: "rgba(249,115,22,0.08)" },
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="46" height="46">
        <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z" />
      </svg>
    ),
  },
  {
    name: "CSS",
    description: "Layouts, spacing, rhythm, and visual balance.",
    tags: ["flexbox", "grid", "responsive"],
    color: { glow: "59,130,246", title: "#60a5fa", border: "rgba(59,130,246,0.25)", tagBorder: "rgba(96,165,250,0.35)", tagBg: "rgba(59,130,246,0.08)" },
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="46" height="46">
        <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm17.09 4.413L5.41 4.41l.213 2.622 10.125.002-.255 2.716h-6.64l.24 2.573h6.182l-.366 3.523-2.91.804-2.956-.81-.188-2.11h-2.61l.29 3.855L12 19.288l5.373-1.53L18.59 4.414z" />
      </svg>
    ),
  },
  {
    name: "JavaScript",
    description: "Dynamic interactivity and logic for modern web apps.",
    tags: ["ES6+", "DOM", "async"],
    color: { glow: "234,179,8", title: "#facc15", border: "rgba(234,179,8,0.25)", tagBorder: "rgba(250,204,21,0.35)", tagBg: "rgba(234,179,8,0.08)" },
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="46" height="46">
        <path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z" />
      </svg>
    ),
  },
  {
    name: "C / C++",
    description: "Systems programming, algorithms, and hardware-level logic.",
    tags: ["pointers", "OOP", "algorithms"],
    color: { glow: "99,102,241", title: "#818cf8", border: "rgba(99,102,241,0.25)", tagBorder: "rgba(129,140,248,0.35)", tagBg: "rgba(99,102,241,0.08)" },
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="46" height="46">
        <path d="M22.394 6c-.167-.29-.398-.543-.652-.69L12.926.22c-.509-.294-1.34-.294-1.848 0L2.26 5.31c-.508.293-.923 1.013-.923 1.6v10.18c0 .294.104.62.271.91.167.29.398.543.652.69l8.816 5.09c.508.293 1.34.293 1.848 0l8.816-5.09c.254-.147.485-.4.652-.69.167-.29.27-.616.27-.91V6.91c.003-.294-.1-.62-.268-.91zM12 19.109c-3.92 0-7.109-3.189-7.109-7.109S8.08 4.891 12 4.891c2.39 0 4.507 1.194 5.79 3.012l-2.887 1.666C14.178 8.512 13.137 8 12 8c-2.206 0-4 1.794-4 4s1.794 4 4 4c1.137 0 2.178-.512 2.903-1.569l2.887 1.666C16.507 17.915 14.39 19.109 12 19.109zm7.109-6.714h-.79v.79h-.79v-.79h-.79v-.79h.79v-.79h.79v.79h.79v.79zm2.962 0h-.79v.79h-.79v-.79h-.79v-.79h.79v-.79h.79v.79h.79v.79z"/>
      </svg>
    ),
  },
  {
    name: "Python",
    description: "Scripting, data processing, and backend logic.",
    tags: ["scripting", "ML", "APIs"],
    color: { glow: "168,85,247", title: "#c084fc", border: "rgba(168,85,247,0.25)", tagBorder: "rgba(192,132,252,0.35)", tagBg: "rgba(168,85,247,0.08)" },
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="46" height="46">
        <path d="M11.914 0C5.82 0 6.2 2.656 6.2 2.656l.007 2.752h5.814v.826H3.887S0 5.789 0 11.969c0 6.18 3.403 5.963 3.403 5.963h2.031v-2.867s-.109-3.402 3.35-3.402h5.769s3.24.052 3.24-3.131V3.129S18.28 0 11.914 0zm-3.21 1.808a1.038 1.038 0 1 1 0 2.077 1.038 1.038 0 0 1 0-2.077z" />
        <path d="M12.086 24c6.094 0 5.714-2.656 5.714-2.656l-.007-2.752h-5.814v-.826h8.134S24 18.211 24 12.031c0-6.18-3.403-5.963-3.403-5.963h-2.031v2.867s.109 3.402-3.35 3.402H9.447s-3.24-.052-3.24 3.131v5.403S5.72 24 12.086 24zm3.21-1.808a1.038 1.038 0 1 1 0-2.077 1.038 1.038 0 0 1 0 2.077z" />
      </svg>
    ),
  },
];

export const SkillsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [isDark, setIsDark] = useState(() => {
    if (typeof window === "undefined") return false;
    return document.documentElement.classList.contains("dark");
  });

  useEffect(() => {
    // Block transitions on first paint to prevent flash
    document.documentElement.classList.add("no-transition");
    const timer = setTimeout(() => {
      document.documentElement.classList.remove("no-transition");
    }, 100);

    const observer = new MutationObserver(() => {
      setIsDark(document.documentElement.classList.contains("dark"));
    });
    observer.observe(document.documentElement, { attributeFilter: ["class"] });
    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, []);

  const touchStartX = useRef(null);
  const dragStartX = useRef(null);
  const isDragging = useRef(false);

  // Touch swipe (mobile)
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const handleTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) go(diff > 0 ? 1 : -1);
    touchStartX.current = null;
  };

  // Mouse drag swipe (desktop)
  const handleMouseDown = (e) => {
    dragStartX.current = e.clientX;
    isDragging.current = false;
  };
  const handleMouseMove = (e) => {
    if (dragStartX.current === null) return;
    if (Math.abs(e.clientX - dragStartX.current) > 5) isDragging.current = true;
  };
  const handleMouseUp = (e) => {
    if (dragStartX.current === null) return;
    const diff = dragStartX.current - e.clientX;
    if (Math.abs(diff) > 50) go(diff > 0 ? 1 : -1);
    dragStartX.current = null;
    isDragging.current = false;
  };
  const handleMouseLeave = () => { dragStartX.current = null; isDragging.current = false; };

  const go = (dir) => {
    if (animating) return;
    setAnimating(true);
    setTimeout(() => {
      setActiveIndex((i) => (i + dir + skills.length) % skills.length);
      setAnimating(false);
    }, 300);
  };

  const jumpTo = (i) => {
    if (animating || i === activeIndex) return;
    setAnimating(true);
    setTimeout(() => { setActiveIndex(i); setAnimating(false); }, 300);
  };

  const leftIdx = (activeIndex - 1 + skills.length) % skills.length;
  const rightIdx = (activeIndex + 1) % skills.length;
  const active = skills[activeIndex];
  const { glow, title, border, tagBorder, tagBg } = active.color;

  const centerStyle = {
    width: "clamp(260px, 75vw, 300px)",
    minHeight: "360px",
    border: `1px solid ${border}`,
    background: isDark
      ? `radial-gradient(ellipse at 50% 25%, rgba(${glow},0.42) 0%, rgba(${glow},0.15) 42%, rgba(8,8,18,0.75) 75%)`
      : `radial-gradient(ellipse at 50% 25%, rgba(${glow},0.15) 0%, rgba(${glow},0.06) 42%, rgba(255,255,255,0.9) 75%)`,
    boxShadow: isDark
      ? `0 0 72px 16px rgba(${glow},0.26), 0 0 160px 50px rgba(${glow},0.1)`
      : `0 0 40px 8px rgba(${glow},0.15), 0 4px 24px rgba(0,0,0,0.08)`,
    transition: "all 0.35s cubic-bezier(0.4, 0, 0.2, 1)",
    opacity: animating ? 0.4 : 1,
    transform: animating ? "scale(0.94) translateY(6px)" : "scale(1.04)",
    zIndex: 2,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    borderRadius: "24px",
    padding: "36px 28px",
    flexShrink: 0,
  };

  return (
    <section id="skills" style={{ position: "relative", width: "100%", display: "flex", flexDirection: "column", alignItems: "center", padding: "60px 16px 80px", overflowX: "hidden", overflowY: "visible" }}>

      <style>{`
        .sk-side {
          width: 220px;
          min-height: 300px;
          background: rgba(128,128,128,0.05);
          border: 1px solid rgba(128,128,128,0.12);
          opacity: 0.55;
          transform: scale(0.86);
          cursor: pointer;
          display: none;
          flex-direction: column;
          align-items: center;
          text-align: center;
          border-radius: 24px;
          padding: 28px 16px;
          flex-shrink: 0;
          transition: opacity 0.35s ease, transform 0.35s ease;
        }
        @media (min-width: 640px) { .sk-side { display: flex; } }
        @media (min-width: 768px) { .sk-side { width: 240px; min-height: 320px; padding: 36px 24px; } }
        .sk-side:hover { opacity: 0.82; transform: scale(0.89); }
        .sk-icon { width:60px;height:60px;border-radius:50%;display:flex;align-items:center;justify-content:center;margin:0 auto 14px;transition:transform 0.3s ease; }
        @media (min-width: 640px) { .sk-icon { width:74px;height:74px;margin:0 auto 18px; } }
        .sk-arrow {
          width:42px;height:42px;border-radius:50%;
          background:rgba(128,128,128,0.08);
          border:1px solid rgba(128,128,128,0.18);
          color:rgba(128,128,128,0.7);
          cursor:pointer;display:none;align-items:center;justify-content:center;
          margin:0 6px;flex-shrink:0;
          transition: background 0.25s ease, color 0.25s ease, transform 0.2s ease, box-shadow 0.25s ease;
          touch-action: manipulation;
        }
        @media (min-width: 640px) { .sk-arrow { display:flex; width:46px;height:46px;margin:0 14px; } }
        @media (min-width: 768px) { .sk-arrow { margin:0 20px; } }
        .sk-arrow:hover { background:rgba(128,128,128,0.18); color:#333; transform:scale(1.1); box-shadow:0 4px 12px rgba(0,0,0,0.1); }
        .sk-arrow:active { transform:scale(0.93); }
        .sk-dot {
          width:8px;height:8px;border-radius:50%;
          background:rgba(128,128,128,0.25);
          cursor:pointer;
          transition: background 0.35s ease, transform 0.3s ease;
          touch-action: manipulation;
        }
        .sk-dot:hover { transform: scale(1.4); }
        .dark .sk-side { background:rgba(255,255,255,0.02); border:1px solid rgba(255,255,255,0.06); }
        .dark .sk-arrow { background:rgba(255,255,255,0.05); border:1px solid rgba(255,255,255,0.12); color:rgba(255,255,255,0.6); }
        .dark .sk-arrow:hover { background:rgba(255,255,255,0.12); color:#fff; box-shadow:0 4px 16px rgba(0,0,0,0.3); }
        .dark .sk-dot { background:rgba(255,255,255,0.18); }
        .sk-carousel { cursor: grab; user-select: none; }
        .sk-carousel:active { cursor: grabbing; }
      `}</style>

      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
        My <span className="text-primary">Skills</span>
      </h2>

      <div
        className="sk-carousel"
        style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "100%", maxWidth: 920, overflow: "visible", padding: "20px 0" }}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
      >
        {/* Left arrow */}
        <button className="sk-arrow" onClick={() => go(-1)} aria-label="Previous">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>

        {/* Left card */}
        <div className="sk-side" onClick={() => go(-1)}>
          <div className="sk-icon" style={{ background: "rgba(128,128,128,0.1)", color: "rgba(128,128,128,0.5)" }}>
            {skills[leftIdx].icon}
          </div>
          <h3 style={{ fontSize: 15, fontWeight: 600, color: "rgba(128,128,128,0.7)", margin: "0 0 8px" }}>{skills[leftIdx].name}</h3>
          <p style={{ fontSize: 12, color: "rgba(128,128,128,0.5)", lineHeight: 1.5, margin: 0 }}>{skills[leftIdx].description}</p>
          <div style={{ width: 40, height: 1, background: "rgba(128,128,128,0.15)", margin: "14px auto" }} />
          <div style={{ display: "flex", flexWrap: "wrap", gap: 6, justifyContent: "center" }}>
            {skills[leftIdx].tags.map(t => (
              <span key={t} style={{ padding: "3px 11px", borderRadius: 999, fontSize: 11, background: "rgba(128,128,128,0.07)", border: "1px solid rgba(128,128,128,0.15)", color: "rgba(128,128,128,0.6)" }}>{t}</span>
            ))}
          </div>
        </div>

        {/* Center card */}
        <div
          style={centerStyle}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <div className="sk-icon" style={{ background: `rgba(${glow},0.12)`, color: isDark ? "rgba(255,255,255,0.92)" : `rgba(${glow},0.9)` }}>
            {active.icon}
          </div>
          <h3 style={{ fontSize: 24, fontWeight: 700, color: title, margin: "0 0 10px", letterSpacing: "0.4px", transition: "color 0.4s" }}>{active.name}</h3>
          <p style={{ fontSize: 14, color: "var(--foreground)", opacity: 0.75, lineHeight: 1.6, margin: 0 }}>{active.description}</p>
          <div style={{ width: 44, height: 1, background: `rgba(${glow},0.45)`, margin: "16px auto", transition: "background 0.5s" }} />
          <div style={{ display: "flex", flexWrap: "wrap", gap: 7, justifyContent: "center" }}>
            {active.tags.map(t => (
              <span key={t} style={{ padding: "4px 13px", borderRadius: 999, fontSize: 11, background: tagBg, border: `1px solid ${tagBorder}`, color: "var(--foreground)", transition: "background 0.4s, border-color 0.4s" }}>{t}</span>
            ))}
          </div>
        </div>

        {/* Right card */}
        <div className="sk-side" onClick={() => go(1)}>
          <div className="sk-icon" style={{ background: "rgba(128,128,128,0.1)", color: "rgba(128,128,128,0.5)" }}>
            {skills[rightIdx].icon}
          </div>
          <h3 style={{ fontSize: 15, fontWeight: 600, color: "rgba(128,128,128,0.7)", margin: "0 0 8px" }}>{skills[rightIdx].name}</h3>
          <p style={{ fontSize: 12, color: "rgba(128,128,128,0.5)", lineHeight: 1.5, margin: 0 }}>{skills[rightIdx].description}</p>
          <div style={{ width: 40, height: 1, background: "rgba(128,128,128,0.15)", margin: "14px auto" }} />
          <div style={{ display: "flex", flexWrap: "wrap", gap: 6, justifyContent: "center" }}>
            {skills[rightIdx].tags.map(t => (
              <span key={t} style={{ padding: "3px 11px", borderRadius: 999, fontSize: 11, background: "rgba(128,128,128,0.07)", border: "1px solid rgba(128,128,128,0.15)", color: "rgba(128,128,128,0.6)" }}>{t}</span>
            ))}
          </div>
        </div>

        {/* Right arrow */}
        <button className="sk-arrow" onClick={() => go(1)} aria-label="Next">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </button>
      </div>

      {/* Dots */}
      <div style={{ display: "flex", gap: 8, marginTop: 32 }}>
        {skills.map((s, i) => (
          <span
            key={i}
            className="sk-dot"
            onClick={() => jumpTo(i)}
            style={{
              background: i === activeIndex ? title : undefined,
              transform: i === activeIndex ? "scale(1.35)" : "scale(1)",
              transition: "background 0.4s, transform 0.3s",
            }}
          />
        ))}
      </div>
    </section>
  );
};