import Link from "next/link";
import { FaDiscord, FaLinkedin, FaTelegram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";


export function Footer() {
  return (
    <footer className="border-t-[0.5px] bg-background/50 relative -z-10 overflow-x-hidden px-4 sm:px-6 lg:px-8 py-6 sm:py-8 mt-8">
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between gap-y-4 text-center sm:text-left [container-type:inline-size]">
        {/* Copyright Text */}
        <span className="text-xs sm:text-sm text-gray-400 font-semibold">
          © 2025 Amirreza Jolani Mameghani — MIT License
        </span>

        {/* Social Icons */}
        <div className="flex justify-center sm:justify-end items-center gap-4">
          <Link href="https://discord.com/@joooli" passHref legacyBehavior>
            <FaDiscord
              size={22}
              className="transition-transform hover:scale-125 hover:text-[#7289DA] hover:cursor-pointer"
            />
          </Link>
          <Link href="https://www.linkedin.com/in/amirjm/" passHref legacyBehavior>
            <FaLinkedin
              size={22}
              className="transition-transform hover:scale-125 hover:text-[#007dbb] hover:cursor-pointer"
            />
          </Link>
          <Link href="https://web.telegram.org/@JooliAR" passHref legacyBehavior>
            <FaTelegram
              size={22}
              className="transition-transform hover:scale-125 hover:text-[#24A1DE] hover:cursor-pointer"
            />
          </Link>
          <Link href="https://x.com/ARJoolim" passHref legacyBehavior>
            <FaXTwitter
              size={22}
              className="transition-transform hover:scale-125 hover:text-white hover:cursor-pointer"
            />
          </Link>
        </div>
      </div>
    </footer>
  );
}
