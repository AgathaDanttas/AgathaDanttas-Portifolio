import { useEffect, useState } from "react";

type SplashScreenProps = {
  onDone: () => void;
};

export default function SplashScreen({ onDone }: SplashScreenProps) {
  const [phase, setPhase] = useState<"in" | "hold" | "out">("in");

  useEffect(() => {
    const t1 = window.setTimeout(() => setPhase("hold"), 800);
    const t2 = window.setTimeout(() => setPhase("out"), 2200);
    const t3 = window.setTimeout(() => onDone(), 3000);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, [onDone]);

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        background: "#0a0a0a",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        opacity: phase === "out" ? 0 : 1,
        transition: phase === "out" ? "opacity 0.8s ease" : "none",
      }}
    >
      <div style={{ textAlign: "center" }}>
        <div style={{ position: "relative", width: 120, height: 120, margin: "0 auto 24px" }}>
          <svg
            viewBox="0 0 120 120"
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              animation: phase !== "in" ? "spinSlow 8s linear infinite" : "none",
            }}
          >
            <rect
              x="6"
              y="6"
              width="108"
              height="108"
              rx="26"
              fill="none"
              stroke="#7c3aed"
              strokeWidth="1"
              strokeDasharray="4 6"
              strokeLinecap="round"
              opacity="0.5"
            />
          </svg>

          <div
            style={{
              position: "absolute",
              inset: "12px",
              background: "linear-gradient(135deg, #7c3aed22, #0a0a0a)",
              border: "1px solid #7c3aed55",
              borderRadius: 20,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow:
                phase !== "in"
                  ? "0 0 40px #7c3aed88, inset 0 0 20px #7c3aed22"
                  : "none",
              transition: "box-shadow 0.6s ease",
            }}
          >
            <span
              style={{
                fontFamily: "'Courier New', monospace",
                fontSize: 32,
                fontWeight: 700,
                background: "linear-gradient(135deg, #a78bfa, #7c3aed)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                letterSpacing: "0.1em",
                opacity: phase === "in" ? 0 : 1,
                transform: phase === "in" ? "scale(0.5)" : "scale(1)",
                transition: "opacity 0.5s ease 0.3s, transform 0.5s ease 0.3s",
              }}
            >
              AD
            </span>
          </div>
        </div>

        <div
          style={{
            fontFamily: "'Courier New', monospace",
            color: "#7c3aed",
            fontSize: 11,
            letterSpacing: "0.3em",
            opacity: phase === "in" ? 0 : 1,
            transform: phase === "in" ? "translateY(10px)" : "none",
            transition: "opacity 0.5s ease 0.5s, transform 0.5s ease 0.5s",
          }}
        >
          AGATHA DANTAS
        </div>
      </div>

      <style>{`
        @keyframes spinSlow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}