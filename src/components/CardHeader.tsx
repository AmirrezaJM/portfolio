import { twMerge } from "tailwind-merge";
import StarIcon from "../../../public/icons/star.svg";

interface CardHeaderProps {
  title: string;
  description: string;
  className?: string
}

export function CardHeader({ title, description, className }: CardHeaderProps) {
  return (
    <div className={twMerge("flex flex-col p-6 md:py-8 md:px-10", className)}>
      <div className="inline-flex items-center gap-2">
        <StarIcon className="size-9 text-emerald-300" />
        <h3 className="font-serif text-3xl">{title}</h3>
      </div>
      <p className="text-sm text-white/60 mt-2">{description}</p>
    </div>
  );
}
