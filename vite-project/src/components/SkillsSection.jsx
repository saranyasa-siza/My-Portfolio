import { useState, useEffect } from "react";

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
    name: "React",
    description: "Component-based UIs with hooks and modern patterns.",
    tags: ["hooks", "components", "state"],
    color: { glow: "6,182,212", title: "#22d3ee", border: "rgba(6,182,212,0.25)", tagBorder: "rgba(34,211,238,0.35)", tagBg: "rgba(6,182,212,0.08)" },
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="46" height="46">
        <path d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.29zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.134.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.868.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z" />
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
  const [isDark, setIsDark] = useState(() =>
    document.documentElement.classList.contains("dark")
  );

  useEffect(() => {
    const observer = new MutationObserver(() => {
      setIsDark(document.documentElement.classList.contains("dark"));
    });
    observer.observe(document.documentElement, { attributeFilter: ["class"] });
    return () => observer.disconnect();
  }, []);

  const go = (dir) => {
    if (animating) return;
    setAnimating(true);
    setTimeout(() => {
      setActiveIndex((i) => (i + dir + skills.length) % skills.length);
      setAnimating(false);
    }, 200);
  };

  const jumpTo = (i) => {
    if (animating || i === activeIndex) return;
    setAnimating(true);
    setTimeout(() => { setActiveIndex(i); setAnimating(false); }, 200);
  };

  const leftIdx = (activeIndex - 1 + skills.length) % skills.length;
  const rightIdx = (activeIndex + 1) % skills.length;
  const active = skills[activeIndex];
  const { glow, title, border, tagBorder, tagBg } = active.color;

  const centerStyle = {
    width: "clamp(220px, 60vw, 300px)",
    minHeight: "360px",
    border: `1px solid ${border}`,
    background: isDark
      ? `radial-gradient(ellipse at 50% 25%, rgba(${glow},0.42) 0%, rgba(${glow},0.15) 42%, rgba(8,8,18,0.75) 75%)`
      : `radial-gradient(ellipse at 50% 25%, rgba(${glow},0.15) 0%, rgba(${glow},0.06) 42%, rgba(255,255,255,0.9) 75%)`,
    boxShadow: isDark
      ? `0 0 72px 16px rgba(${glow},0.26), 0 0 160px 50px rgba(${glow},0.1)`
      : `0 0 40px 8px rgba(${glow},0.15), 0 4px 24px rgba(0,0,0,0.08)`,
    transition: "background 0.5s ease, box-shadow 0.5s ease, border-color 0.5s ease, opacity 0.2s, transform 0.2s",
    opacity: animating ? 0.55 : 1,
    transform: animating ? "scale(0.97)" : "scale(1.04)",
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
    <section id="skills" style={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "center", padding: "60px 16px 80px", overflow: "hidden" }}>
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
        My <span className="text-primary">Skills</span>
      </h2>

      <style>{`
        .sk-side {
          width: 200px;
          min-height: 300px;
          background: rgba(128,128,128,0.05);
          border: 1px solid rgba(128,128,128,0.12);
          opacity: 0.55;
          transform: scale(0.86);
          cursor: pointer;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          border-radius: 24px;
          padding: 28px 16px;
          flex-shrink: 0;
          transition: opacity 0.25s;
        }
        @media (min-width: 640px) {
          .sk-side { width: 240px; min-height: 320px; padding: 36px 24px; }
        }
        .sk-side:hover { opacity: 0.78; }
        .sk-icon { width:64px;height:64px;border-radius:50%;display:flex;align-items:center;justify-content:center;margin:0 auto 14px; }
        @media (min-width: 640px) { .sk-icon { width:74px;height:74px;margin:0 auto 18px; } }
        .sk-arrow {
          width:38px;height:38px;border-radius:50%;
          background:rgba(128,128,128,0.08);
          border:1px solid rgba(128,128,128,0.15);
          color:rgba(128,128,128,0.7);
          cursor:pointer;display:flex;align-items:center;justify-content:center;
          margin:0 8px;flex-shrink:0;
          transition:background 0.2s,color 0.2s;
        }
        @media (min-width: 640px) { .sk-arrow { width:44px;height:44px;margin:0 18px; } }
        .sk-arrow:hover{background:rgba(128,128,128,0.15);color:#333;}
        .sk-dot {
          width:7px;height:7px;border-radius:50%;
          background:rgba(128,128,128,0.25);
          cursor:pointer;
          transition:background 0.35s, transform 0.35s;
        }
        .dark .sk-side {
          background: rgba(255,255,255,0.02);
          border: 1px solid rgba(255,255,255,0.06);
        }
        .dark .sk-arrow {
          background:rgba(255,255,255,0.05);
          border:1px solid rgba(255,255,255,0.1);
          color:rgba(255,255,255,0.6);
        }
        .dark .sk-arrow:hover{background:rgba(255,255,255,0.1);color:#fff;}
        .dark .sk-dot { background:rgba(255,255,255,0.18); }
      `}</style>

      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "100%", maxWidth: 920, overflowX: "hidden" }}>
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
        <div style={centerStyle}>
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