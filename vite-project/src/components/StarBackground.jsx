import { useEffect, useRef } from "react";

export const StarBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let W, H;
    let layers = [];
    let animId;
    let time = 0;
    const mouse = { x: 0.5, y: 0.5 };
    const targetMouse = { x: 0.5, y: 0.5 };

    const NUM_LAYERS = 4;
    const DPR = window.devicePixelRatio || 1;

    function resize() {
      W = canvas.width = window.innerWidth * DPR;
      H = canvas.height = window.innerHeight * DPR;
      canvas.style.width = window.innerWidth + "px";
      canvas.style.height = window.innerHeight + "px";
      buildLayers();
    }

    function buildLayers() {
      layers = [];
      for (let l = 0; l < NUM_LAYERS; l++) {
        const depth = (l + 1) / NUM_LAYERS;
        const count = Math.floor((W * H) / (DPR ** 2) / (8000 - l * 600));
        const stars = Array.from({ length: count }, () => ({
          x: Math.random(),
          y: Math.random(),
          size: (Math.random() * 1.2 + 0.4) * depth * DPR,
          twinkleOffset: Math.random() * Math.PI * 2,
          twinkleSpeed: Math.random() * 1.5 + 0.3,
          twinkleMin: Math.random() * 0.05 + 0.02,
          twinkleMax: Math.random() * 0.4 + 0.6,
          twinkleSharpness: Math.random() * 3 + 1,
        }));
        layers.push({
          depth,
          parallaxStrength: depth * 60 * DPR,
          stars,
        });
      }
    }

    function easeVec(curr, tgt, speed) {
      curr.x += (tgt.x - curr.x) * speed;
      curr.y += (tgt.y - curr.y) * speed;
    }

    function twinkleCurve(t, sharpness) {
      const s = (Math.sin(t) + 1) / 2;
      return Math.pow(s, sharpness);
    }

    function draw() {
      time += 0.016;
      easeVec(mouse, targetMouse, 0.04);
      ctx.clearRect(0, 0, W, H);

      const dx = mouse.x - 0.5;
      const dy = mouse.y - 0.5;

      // Smooth oscillating zoom — breathes in and out, never drifts
      const globalZoom = 1 + Math.sin(time * 0.18) * 0.06;

      for (let l = 0; l < layers.length; l++) {
        const layer = layers[l];
        const px = dx * layer.parallaxStrength;
        const py = dy * layer.parallaxStrength;
        const zoom = globalZoom * (1 + l * 0.015);

        for (const star of layer.stars) {
          const t = time * star.twinkleSpeed + star.twinkleOffset;
          const curve = twinkleCurve(t, star.twinkleSharpness);
          const opacity = star.twinkleMin + curve * (star.twinkleMax - star.twinkleMin);

          const cx = W / 2;
          const cy = H / 2;
          let sx = ((star.x - 0.5) * W * zoom + cx + px + W) % W;
          let sy = ((star.y - 0.5) * H * zoom + cy + py + H) % H;
          const size = star.size * zoom;

          // Core star
          ctx.globalAlpha = Math.max(0, Math.min(1, opacity));
          ctx.fillStyle = l >= 3 ? "#b8d4ff" : l === 2 ? "#d0e8ff" : "#ffffff";
          ctx.beginPath();
          ctx.arc(sx, sy, size, 0, Math.PI * 2);
          ctx.fill();

          // Halo
          if (size > 1.2 * DPR) {
            ctx.globalAlpha = opacity * 0.18 * curve;
            ctx.beginPath();
            ctx.arc(sx, sy, size * (2.5 + curve * 1.5), 0, Math.PI * 2);
            ctx.fill();
          }

          // Cross-spike on brightest foreground stars
          if (l >= 2 && curve > 0.75 && size > 1.4 * DPR) {
            const spikeLen = size * (4 + curve * 6);
            const spikeAlpha = (curve - 0.75) * 4 * opacity * 0.6;
            ctx.globalAlpha = spikeAlpha;
            ctx.strokeStyle = l >= 3 ? "#b8d4ff" : "#d0e8ff";
            ctx.lineWidth = 0.5 * DPR;
            ctx.beginPath();
            ctx.moveTo(sx - spikeLen, sy);
            ctx.lineTo(sx + spikeLen, sy);
            ctx.moveTo(sx, sy - spikeLen);
            ctx.lineTo(sx, sy + spikeLen);
            ctx.stroke();
          }
        }
      }

      ctx.globalAlpha = 1;
      animId = requestAnimationFrame(draw);
    }

    const handleMouseMove = (e) => {
      targetMouse.x = e.clientX / window.innerWidth;
      targetMouse.y = e.clientY / window.innerHeight;
    };

    const handleMouseLeave = () => {
      targetMouse.x = 0.5;
      targetMouse.y = 0.5;
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);
    window.addEventListener("resize", resize);

    resize();
    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ background: "transparent" }}
    />
  );
};