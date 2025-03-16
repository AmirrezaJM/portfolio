import { ArrowDown } from "lucide-react";
import Image from "next/image";
import { HeroOrbit } from "../HeroOrbit";
import StarIcon from "../../../public/icons/star.svg";
import SparkleIcon from "../../../public/icons/sparkle.svg";

export function Hero() {
  return (
    <div className="py-32 md:py-48 lg:py-60 relative z-0 overflow-x-clip">
      <div className="absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)">
        <div
          className="absolute inset-0 -z-30 opacity-5"
          style={{ backgroundImage: `url('/images/grain.jpg')` }}
        ></div>
        <div className="absolute inset-0 size-[620px] border-2 top-1/2 left-1/2 -translte-x-1/2 -translate-y-1/2 rounded-full border-emerald-300/5 shadow[0_0_80px_inset] shadow-emerald-300"></div>
        <div className="absolute inset-0 size-[820px] border-2 top-1/2 left-1/2 -translte-x-1/2 -translate-y-1/2 rounded-full border-emerald-300/5 shadow[0_0_80px_inset] shadow-emerald-300"></div>
        <div className="absolute inset-0 size-[1020px] border-2 top-1/2 left-1/2 -translte-x-1/2 -translate-y-1/2 rounded-full border-emerald-300/5 shadow[0_0_80px_inset] shadow-emerald-300"></div>
        <div className="absolute inset-0 size-[1220px] border-2 top-1/2 left-1/2 -translte-x-1/2 -translate-y-1/2 rounded-full border-emerald-300/5 shadow[0_0_80px_inset] shadow-emerald-300"></div>
        <HeroOrbit size={430} rotation={-14} shouldOrbit orbitDuration="30s">
          <SparkleIcon className="size-8 text-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit size={440} rotation={79} shouldOrbit orbitDuration="32s">
          <SparkleIcon className="size-5 text-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit size={520} rotation={-41} shouldOrbit orbitDuration="34s">
          <div className="size-2 rounded-full text-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit size={530} rotation={178} shouldOrbit orbitDuration="36s">
          <SparkleIcon className="size-10 text-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit size={550} rotation={20} shouldOrbit orbitDuration="38s">
          <SparkleIcon className="size-12 text-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit size={590} rotation={98} shouldOrbit orbitDuration="40s">
          <SparkleIcon className="size-8 text-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit size={650} rotation={-5} shouldOrbit orbitDuration="42s">
          <div className="size-2 rounded-full text-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit size={710} rotation={144} shouldOrbit orbitDuration="44s">
          <SparkleIcon className="size-14 text-emerald-300/20" />
        </HeroOrbit>

        <HeroOrbit size={720} rotation={85} shouldOrbit orbitDuration="46s">
          <div className="size-3 rounded-full text-emerald-300/20" />
        </HeroOrbit>

        <HeroOrbit size={800} rotation={-72} shouldOrbit orbitDuration="48s" shouldSpin spinDuration="6s">
          <StarIcon className="size-28 text-emerald-300" />
        </HeroOrbit>
      </div>
      {/* animate-spin [animation-duration:30s] */}
      <div className="container">
        <div className="flex flex-col items-center">
          <Image
            className="size-24"
            src="/images/memoji-computer.png"
            alt="Person peeking from"
          />
          <div className="bg-gray-950 border border-y-gray-800 px-4  py-1.5 inline-flex gap-4 rounded-lg">
            <div className="bg-green-500 size-2.5 rounded-full relative">
              <div className="bg-green-500 absolute inset-0 rounded-full animate-ping"></div>
            </div>
            <div className="text-sm font-medium">
              Available for new projects{" "}
            </div>
          </div>
        </div>
        <div className="max-w-lg mx-auto">
          <h1 className="font-serif text-5xl text-center mt-8 tracking-wide">
            Building Expectional User Experiences
          </h1>
          <p className="mt-4 text-center text-white/60 md:text-lg">
            I specialize in transforming designs into functional,
            high-performing web application Let&#39;s discuss your next
            projects.
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center mt-8 gap-4">
          {/* TODO: SHADCNUI */}
          <button className="inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-xl">
            <span className="font-semibold">Explore My Work</span>
            <ArrowDown className="size-4" />
          </button>
          <button className="inline-flex items-center gap-2 border border-white bg-white text-gray-900 h-12 px-6 rounded-xl">
            <span>👋🏻</span>
            <span className="font-semibold">Let&#39;s connect</span>
          </button>
        </div>
      </div>
    </div>
  );
}
