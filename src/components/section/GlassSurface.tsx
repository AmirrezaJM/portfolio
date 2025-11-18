// "use client";

// import React, { useEffect, useRef, useState, useId } from "react";

// export interface GlassSurfaceProps {
//   children?: React.ReactNode;
//   width?: number | string;          // optional; omit for auto
//   height?: number | string;         // optional; omit for auto
//   borderRadius?: number;
//   borderWidth?: number;
//   brightness?: number;
//   opacity?: number;
//   blur?: number;
//   displace?: number;
//   backgroundOpacity?: number;
//   saturation?: number;
//   distortionScale?: number;
//   redOffset?: number;
//   greenOffset?: number;
//   blueOffset?: number;
//   xChannel?: "R" | "G" | "B";
//   yChannel?: "R" | "G" | "B";
//   mixBlendMode?:
//     | "normal" | "multiply" | "screen" | "overlay" | "darken" | "lighten"
//     | "color-dodge" | "color-burn" | "hard-light" | "soft-light" | "difference"
//     | "exclusion" | "hue" | "saturation" | "color" | "luminosity"
//     | "plus-darker" | "plus-lighter";
//   className?: string;
//   style?: React.CSSProperties;
// }

// const useDarkMode = () => {
//   const [isDark, setIsDark] = useState(false);
//   useEffect(() => {
//     if (typeof window === "undefined") return;
//     const mq = window.matchMedia("(prefers-color-scheme: dark)");
//     setIsDark(mq.matches);
//     const handler = (e: MediaQueryListEvent) => setIsDark(e.matches);
//     mq.addEventListener("change", handler);
//     return () => mq.removeEventListener("change", handler);
//   }, []);
//   return isDark;
// };

// const GlassSurface: React.FC<GlassSurfaceProps> = ({
//   children,
//   width,                    // if undefined -> auto
//   height,                   // if undefined -> auto
//   borderRadius = 20,
//   borderWidth = 0.07,
//   brightness = 50,
//   opacity = 0.93,
//   blur = 11,
//   displace = 0,
//   backgroundOpacity = 0,
//   saturation = 1,
//   distortionScale = -180,
//   redOffset = 0,
//   greenOffset = 10,
//   blueOffset = 20,
//   xChannel = "R",
//   yChannel = "G",
//   mixBlendMode = "difference",
//   className = "",
//   style = {},
// }) => {
//   const uniqueId = useId().replace(/:/g, "-");
//   const filterId = `glass-filter-${uniqueId}`;
//   const redGradId = `red-grad-${uniqueId}`;
//   const blueGradId = `blue-grad-${uniqueId}`;

//   const containerRef = useRef<HTMLDivElement>(null);
//   const feImageRef = useRef<SVGFEImageElement>(null);
//   const redChannelRef = useRef<SVGFEDisplacementMapElement>(null);
//   const greenChannelRef = useRef<SVGFEDisplacementMapElement>(null);
//   const blueChannelRef = useRef<SVGFEDisplacementMapElement>(null);
//   const gaussianBlurRef = useRef<SVGFEGaussianBlurElement>(null);

//   const [measured, setMeasured] = useState({ w: 0, h: 0 });
//   const isDarkMode = useDarkMode();

//   // Measure the rendered box so the displacement map matches the real size
//   useEffect(() => {
//     if (!containerRef.current) return;

//     const measure = () => {
//       const r = containerRef.current!.getBoundingClientRect();
//       // round up to avoid sub-pixel gaps in the SVG viewBox
//       const w = Math.max(1, Math.ceil(r.width));
//       const h = Math.max(1, Math.ceil(r.height));
//       setMeasured((prev) => (prev.w !== w || prev.h !== h ? { w, h } : prev));
//     };

//     measure();
//     const ro = new ResizeObserver(measure);
//     ro.observe(containerRef.current);
//     window.addEventListener("orientationchange", measure);
//     window.addEventListener("resize", measure);``
//     return () => {
//       ro.disconnect();
//       window.removeEventListener("orientationchange", measure);
//       window.removeEventListener("resize", measure);
//     };
//   }, []);

//   const generateDisplacementMap = () => {
//     const actualWidth = Math.max(1, measured.w);
//     const actualHeight = Math.max(1, measured.h);
//     const edgeSize = Math.min(actualWidth, actualHeight) * (borderWidth * 0.5);

//     const svgContent = `
//       <svg viewBox="0 0 ${actualWidth} ${actualHeight}" xmlns="http://www.w3.org/2000/svg">
//         <defs>
//           <linearGradient id="${redGradId}" x1="100%" y1="0%" x2="0%" y2="0%">
//             <stop offset="0%" stop-color="#0000"/>
//             <stop offset="100%" stop-color="red"/>
//           </linearGradient>
//           <linearGradient id="${blueGradId}" x1="0%" y1="0%" x2="0%" y2="100%">
//             <stop offset="0%" stop-color="#0000"/>
//             <stop offset="100%" stop-color="blue"/>
//           </linearGradient>
//         </defs>
//         <rect width="${actualWidth}" height="${actualHeight}" fill="black"/>
//         <rect width="${actualWidth}" height="${actualHeight}" rx="${borderRadius}" fill="url(#${redGradId})" />
//         <rect width="${actualWidth}" height="${actualHeight}" rx="${borderRadius}" fill="url(#${blueGradId})" style="mix-blend-mode:${mixBlendMode}" />
//         <rect x="${edgeSize}" y="${edgeSize}" width="${actualWidth - edgeSize * 2}" height="${actualHeight - edgeSize * 2}"
//               rx="${borderRadius}" fill="hsl(0 0% ${brightness}% / ${opacity})" style="filter:blur(${blur}px)" />
//       </svg>
//     `;
//     return `data:image/svg+xml,${encodeURIComponent(svgContent)}`;
//   };

//   const updateDisplacementMap = () => {
//     if (!feImageRef.current || measured.w === 0 || measured.h === 0) return;
//     feImageRef.current.setAttribute("href", generateDisplacementMap());
//   };

//   // Update filter params & map when inputs change
//   useEffect(() => {
//     updateDisplacementMap();

//     [
//       { ref: redChannelRef, offset: redOffset },
//       { ref: greenChannelRef, offset: greenOffset },
//       { ref: blueChannelRef, offset: blueOffset },
//     ].forEach(({ ref, offset }) => {
//       if (ref.current) {
//         ref.current.setAttribute("scale", String(distortionScale + offset));
//         ref.current.setAttribute("xChannelSelector", xChannel);
//         ref.current.setAttribute("yChannelSelector", yChannel);
//       }
//     });

//     gaussianBlurRef.current?.setAttribute("stdDeviation", String(displace));
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [
//     measured.w,
//     measured.h,
//     borderRadius,
//     borderWidth,
//     brightness,
//     opacity,
//     blur,
//     displace,
//     distortionScale,
//     redOffset,
//     greenOffset,
//     blueOffset,
//     xChannel,
//     yChannel,
//     mixBlendMode,
//   ]);

//   // If width/height props change explicitly, re-render the map
//   useEffect(() => {
//     updateDisplacementMap();
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [width, height]);

//   const supportsSVGFilters = () => {
//     if (typeof window === "undefined") return false;
//     const ua = navigator.userAgent;
//     const isWebkit = /Safari/.test(ua) && !/Chrome/.test(ua);
//     const isFirefox = /Firefox/.test(ua);
//     if (isWebkit || isFirefox) return false;
//     const div = document.createElement("div");
//     div.style.backdropFilter = `url(#${filterId})`;
//     return div.style.backdropFilter !== "";
//     // (Chromium allows url(#id) in backdrop-filter)
//   };

//   const supportsBackdropFilter = () => {
//     if (typeof window === "undefined") return false;
//     return CSS.supports("backdrop-filter", "blur(10px)");
//   };

//   const getContainerStyles = (): React.CSSProperties => {
//     const base = {
//       ...style,
//       borderRadius: `${borderRadius}px`,
//       // allow auto sizing by default
//       ...(width != null && {
//         width: typeof width === "number" ? `${width}px` : width,
//       }),
//       ...(height != null && {
//         height: typeof height === "number" ? `${height}px` : height,
//       }),
//       // variables used by the fallback utility
//       "--glass-frost": backgroundOpacity as any,
//       "--glass-saturation": saturation as any,
//     } as React.CSSProperties & Record<string, any>;

//     const svgOK = supportsSVGFilters();
//     const bfOK = supportsBackdropFilter();

//     if (svgOK) {
//       return {
//         ...base,
//         background: isDarkMode
//           ? `hsl(0 0% 0% / ${backgroundOpacity})`
//           : `hsl(0 0% 100% / ${backgroundOpacity})`,
//         backdropFilter: `url(#${filterId}) saturate(${saturation})`,
//         boxShadow: isDarkMode
//           ? `0 0 2px 1px color-mix(in oklch, white, transparent 65%) inset,
//              0 0 10px 4px color-mix(in oklch, white, transparent 85%) inset,
//              0 4px 16px oklch(15% 0 0 / .05),
//              0 8px 24px oklch(15% 0 0 / .05),
//              0 16px 56px oklch(15% 0 0 / .05),
//              0 4px 16px oklch(15% 0 0 / .05) inset,
//              0 8px 24px oklch(15% 0 0 / .05) inset,
//              0 16px 56px oklch(15% 0 0 / .05) inset`
//           : `0 0 2px 1px color-mix(in oklch, black, transparent 85%) inset,
//              0 0 10px 4px color-mix(in oklch, black, transparent 90%) inset,
//              0 4px 16px oklch(15% 0 0 / .05),
//              0 8px 24px oklch(15% 0 0 / .05),
//              0 16px 56px oklch(15% 0 0 / .05),
//              0 4px 16px oklch(15% 0 0 / .05) inset,
//              0 8px 24px oklch(15% 0 0 / .05) inset,
//              0 16px 56px oklch(15% 0 0 / .05) inset`,
//       };
//     }

//     // Fallbacks
//     if (isDarkMode) {
//       if (!bfOK) {
//         return {
//           ...base,
//           background: "rgba(0, 0, 0, 0.4)",
//           border: "1px solid rgba(255, 255, 255, 0.2)",
//           boxShadow:
//             "inset 0 1px 0 0 rgba(255, 255, 255, 0.2), inset 0 -1px 0 0 rgba(255, 255, 255, 0.1)",
//         };
//       }
//       return {
//         ...base,
//         background: "rgba(255, 255, 255, 0.1)",
//         backdropFilter: "blur(12px) saturate(1.8) brightness(1.2)",
//         WebkitBackdropFilter: "blur(12px) saturate(1.8) brightness(1.2)",
//         border: "1px solid rgba(255, 255, 255, 0.2)",
//         boxShadow:
//           "inset 0 1px 0 0 rgba(255, 255, 255, 0.2), inset 0 -1px 0 0 rgba(255, 255, 255, 0.1)",
//       };
//     } else {
//       if (!bfOK) {
//         return {
//           ...base,
//           background: "rgba(255, 255, 255, 0.4)",
//           border: "1px solid rgba(255, 255, 255, 0.3)",
//           boxShadow:
//             "inset 0 1px 0 0 rgba(255, 255, 255, 0.5), inset 0 -1px 0 0 rgba(255, 255, 255, 0.3)",
//         };
//       }
//       return {
//         ...base,
//         background: "rgba(255, 255, 255, 0.25)",
//         backdropFilter: "blur(12px) saturate(1.8) brightness(1.1)",
//         WebkitBackdropFilter: "blur(12px) saturate(1.8) brightness(1.1)",
//         border: "1px solid rgba(255, 255, 255, 0.3)",
//         boxShadow:
//           "0 8px 32px 0 rgba(31, 38, 135, 0.2), 0 2px 16px 0 rgba(31, 38, 135, 0.1), inset 0 1px 0 0 rgba(255, 255, 255, 0.4), inset 0 -1px 0 0 rgba(255, 255, 255, 0.2)",
//       };
//     }
//   };

//   const focusVisibleClasses = isDarkMode
//     ? "focus-visible:outline-2 focus-visible:outline-[#0A84FF] focus-visible:outline-offset-2"
//     : "focus-visible:outline-2 focus-visible:outline-[#007AFF] focus-visible:outline-offset-2";

//   return (
//     <div
//       ref={containerRef}
//       className={[
//         "glass-surface relative flex items-center justify-center overflow-hidden transition-opacity duration-[260ms] ease-out",
//         focusVisibleClasses,
//         className,
//       ].join(" ")}
//       style={getContainerStyles()}
//     >
//       {/* SVG filter (invisible overlay) */}
//       <svg
//         aria-hidden
//         className="pointer-events-none absolute inset-0 -z-10 h-full w-full opacity-0"
//         xmlns="http://www.w3.org/2000/svg"
//       >
//         <defs>
//           <filter
//             id={filterId}
//             colorInterpolationFilters="sRGB"
//             x="0%" y="0%" width="100%" height="100%"
//             filterRes="128"
//           >
//             <feImage
//               ref={feImageRef}
//               x="0"
//               y="0"
//               width="100%"
//               height="100%"
//               preserveAspectRatio="none"
//               result="map"
//             />
//             <feDisplacementMap ref={redChannelRef} in="SourceGraphic" in2="map" result="dispRed" />
//             <feColorMatrix
//               in="dispRed"
//               type="matrix"
//               values="1 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 1 0"
//               result="red"
//             />
//             <feDisplacementMap ref={greenChannelRef} in="SourceGraphic" in2="map" result="dispGreen" />
//             <feColorMatrix
//               in="dispGreen"
//               type="matrix"
//               values="0 0 0 0 0  0 1 0 0 0  0 0 0 0 0  0 0 0 1 0"
//               result="green"
//             />
//             <feDisplacementMap ref={blueChannelRef} in="SourceGraphic" in2="map" result="dispBlue" />
//             <feColorMatrix
//               in="dispBlue"
//               type="matrix"
//               values="0 0 0 0 0  0 0 0 0 0  0 0 1 0 0  0 0 0 1 0"
//               result="blue"
//             />
//             <feBlend in="red" in2="green" mode="screen" result="rg" />
//             <feBlend in="rg" in2="blue" mode="screen" result="output" />
//             <feGaussianBlur ref={gaussianBlurRef} in="output" stdDeviation="0.7" />
//           </filter>
//         </defs>
//       </svg>

//       {/* Content */}
//       <div className="relative z-10 h-full w-96 rounded-[inherit] flex-col items-start p-4 flex justify-center">
//         {children}
//       </div>
//     </div>
//   );
// };

// export default GlassSurface;
