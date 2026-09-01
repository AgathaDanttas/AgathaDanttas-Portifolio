import type { CSSProperties, ReactNode } from "react";

type SpotlightCardProps = {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
};

export default function SpotlightCard({ children, className = "", style = {} }: SpotlightCardProps) {
  return (
    <div className={`relative overflow-hidden ${className}`} style={style}>
      <div className="relative z-10 h-full">{children}</div>
    </div>
  );
}
