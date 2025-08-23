import * as React from "react";

type ContainerProps = {
  children: React.ReactNode;
  className?: string;
  wide?: boolean;
};

export default function Container({
  children,
  className = "",
  wide = false,
}: ContainerProps) {
  return (
    <div
      className={[
        // layout & centering
        "mx-auto w-full",
        // responsive side paddings (tablet → 4K)
        "px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-16",
        "min-[1920px]:px-24 min-[2560px]:px-32 min-[3840px]:px-40",
        // width caps (feel free to tweak to your aesthetic)
        wide
          ? [
              // wide mode: breathe more on desktop/4K
              "max-w-screen-md sm:max-w-screen-lg md:max-w-screen-xl",
              "lg:max-w-[1240px] xl:max-w-[1440px] 2xl:max-w-[1680px]",
              "min-[1920px]:max-w-[1880px] min-[2560px]:max-w-[2200px] min-[3840px]:max-w-[2600px]",
            ].join(" ")
          : [
              // standard reading width (nice for text)
              "max-w-screen-md sm:max-w-screen-lg md:max-w-screen-xl",
              "lg:max-w-[1120px] xl:max-w-[1280px] 2xl:max-w-[1440px]",
              "min-[1920px]:max-w-[1600px] min-[2560px]:max-w-[1760px] min-[3840px]:max-w-[1920px]",
            ].join(" "),
        className,
      ].join(" ")}
      data-container=""
    >
      {children}
    </div>
  );
}
