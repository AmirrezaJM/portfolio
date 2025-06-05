// components/MusicCard.tsx
import Image from "next/image";
import { FaSpotify } from "react-icons/fa";

interface MusicCardProps {
  category: string;
  title: string;
  artist: string;
  image: string;
  color: string;
}

const MusicCard: React.FC<MusicCardProps> = ({
  category,
  title,
  artist,
  image,
  color,
}) => {
  return (
    <div
      className="relative rounded-2xl overflow-hidden shadow-md w-full max-w-xs sm:max-w-sm md:max-w-md mx-auto"
      style={{ backgroundColor: color }}
    >
      {/* Background image */}
      <Image
        src={image}
        alt={title}
        width={52}
        height={52}
        className="absolute inset-0 w-full h-full object-cover opacity-30"
      />

      {/* Category label */}
      <div className="absolute top-2 left-3 text-[0.7rem] sm:text-sm text-white/80 italic z-10">
        {category}
      </div>

      {/* Music info card */}
      <div className="absolute bottom-4 left-4 right-4 z-10">
        <div className="bg-white/10 backdrop-blur-lg rounded-xl p-3 sm:p-4 flex items-center justify-between text-white">
          <div>
            <p className="text-sm sm:text-base font-semibold">{title}</p>
            <p className="text-xs sm:text-sm text-white/70">{artist}</p>
          </div>
          <FaSpotify className="text-green-400 text-lg sm:text-xl" />
        </div>
      </div>
    </div>
  );
};

export default MusicCard;
