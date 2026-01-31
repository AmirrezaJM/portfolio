import React from "react";
import { cn } from "@/lib/utils";

type StarBorderProps<T extends React.ElementType> = React.ComponentPropsWithoutRef<T> & {
  as?: T;
  className?: string;
  children?: React.ReactNode;
  color?: string;
  speed?: React.CSSProperties["animationDuration"] | number;
  thickness?: number;
  contentClassName?: string;
  contentStyle?: React.CSSProperties;
};

const StarBorder = <T extends React.ElementType = "div">(props: StarBorderProps<T>) => {
  const {
    as,
    className = "",
    color = "#22d3ee",
    speed = "6s",
    thickness = 2,
    contentClassName,
    contentStyle,
    children,
    style,
    ...rest
  } = props;

  const Component = as || "div";
  const animationDuration = typeof speed === "number" ? `${speed}s` : speed;

  return (
    <Component
      {...rest}
      className={cn("star-border relative block overflow-hidden rounded-[28px]", className)}
      style={
        {
          ...style,
          "--sb-color": color,
          "--sb-speed": animationDuration,
          "--sb-thickness": `${thickness}px`,
        } as React.CSSProperties
      }
    >
      <span aria-hidden className="sb-border" />
      <span aria-hidden className="sb-border sb-border--glow" />
      <span aria-hidden className="sb-spark sb-spark--one" />
      <span aria-hidden className="sb-spark sb-spark--two" />
      <div
        className={cn(
          "sb-inner relative z-10 rounded-[24px] border border-white/10 bg-[#03121f]/85 p-6 text-white shadow-[0_30px_90px_-45px_rgba(15,118,153,0.9)] backdrop-blur-xl",
          contentClassName
        )}
        style={contentStyle}
      >
        {children}
      </div>
      <style jsx>{`
        .star-border {
          isolation: isolate;
          padding: calc(var(--sb-thickness, 2px) * 1.15);
        }

        .sb-border,
        .sb-spark {
          pointer-events: none;
          position: absolute;
          inset: 0;
          border-radius: 1.75rem;
        }

        .sb-border {
          box-sizing: border-box;
          padding: var(--sb-thickness, 2px);
          background: conic-gradient(
              from 90deg,
              rgba(34, 211, 238, 0.95),
              rgba(59, 130, 246, 0.9),
              rgba(236, 72, 153, 0.9),
              rgba(34, 211, 238, 0.95)
            ),
            radial-gradient(circle at 20% 30%, rgba(255, 255, 255, 0.65), transparent 60%);
          opacity: 0.9;
          filter: drop-shadow(0 0 25px rgba(34, 211, 238, 0.25));
          mask: linear-gradient(#000 0 0) padding-box, linear-gradient(#000 0 0);
          mask-composite: exclude;
          -webkit-mask: linear-gradient(#000 0 0) padding-box, linear-gradient(#000 0 0);
          -webkit-mask-composite: xor;
        }

        .sb-border--glow {
          opacity: 0.5;
          filter: blur(32px);
          animation-direction: reverse;
        }

        .sb-spark {
          width: 220%;
          height: 220%;
          transform-origin: center;
          background: radial-gradient(circle, var(--sb-color, #22d3ee) 0%, transparent 60%);
          opacity: 0.25;
          mix-blend-mode: screen;
        }

        .sb-spark--one {
          top: -80%;
          left: -65%;
          animation: sb-spark var(--sb-speed, 6s) linear infinite;
        }

        .sb-spark--two {
          bottom: -75%;
          right: -55%;
          animation: sb-spark var(--sb-speed, 6s) linear infinite reverse;
        }

        .sb-inner {
          border-radius: calc(1.75rem - var(--sb-thickness, 2px));
        }

        @keyframes sb-rotate {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes sb-spark {
          0% {
            transform: translate3d(0, 0, 0) scale(1);
            opacity: 0.2;
          }
          50% {
            transform: translate3d(12%, -8%, 0) scale(1.05);
            opacity: 0.35;
          }
          100% {
            transform: translate3d(24%, -12%, 0) scale(1);
            opacity: 0.25;
          }
        }
      `}</style>
    </Component>
  );
};

export default StarBorder;
