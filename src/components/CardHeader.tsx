"use client";

interface CardHeaderProps {
  title: string;
}

export const CardHeader = ({ title }: CardHeaderProps) => {
  return (
    <h5 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-10 md:mb-12 text-center px-4 sm:px-0 bg-gradient-to-t from-[hsl(0,0%,50%)] to-white bg-clip-text text-transparent">
      {title}
    </h5>
  );
};
