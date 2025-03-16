import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import CheckCircleIcon from "../../../public/icons/check-circle.svg";
import darkSaasLandingPage from "../../../public/images/dark-saas-landing-page.png";
import lightSaasLandingPage from "../../../public/images/light-saas-landing-page.png";
import aiStartupLandingPage from "../../../public/images/ai-startup-landing-page.png";
import { SectionHeader } from "../SectionHeader";
import { Card } from "../Card";

const portfolioProjects = [
  {
    company: "Acme Corp",
    year: "2022",
    title: "Dark Saas Landing Page",
    results: [
      { id: 1, title: "Enhanced user experience by 40%" },
      { id: 2, title: "Improved site speed by 50%" },
      { id: 3, title: "Increased mobile traffic by 35%" },
    ],
    link: "https://youtu.be/4k7IdSLxh6w",
    image: darkSaasLandingPage,
  },
  {
    company: "Tech Solutions",
    year: "2023",
    title: "E-Commerce Dashboard",
    results: [
      { id: 1, title: "Boosted sales by 25%" },
      { id: 2, title: "Reduced load time by 60%" },
      { id: 3, title: "Improved checkout conversion by 30%" },
    ],
    link: "https://youtu.be/example1",
    image: lightSaasLandingPage,
  },
  {
    company: "NextGen Innovations",
    year: "2021",
    title: "AI-powered Portfolio Website",
    results: [
      { id: 1, title: "Increased engagement by 45%" },
      { id: 2, title: "Implemented AI chatbot for customer support" },
      { id: 3, title: "Improved SEO ranking by 20%" },
    ],
    link: "https://youtu.be/example2",
    image: aiStartupLandingPage,
  },
];

export function Projects() {
  return (
    <section className="pb-16 lg:py-24">
      <div className="container">
        <SectionHeader
          eyebrow=" Real-world Results"
          title="Features Projects"
          description="See how I transformed concepts into engaging digital experiences."
        />
        <div className="flex flex-col mt-10 md:mt-20 gap-20">
          {portfolioProjects.map((project) => (
            <Card
              className="px-8 pt-8 pb-0 md:pt-12 md:px-10 lg:pt-16 lg:px-20"
              key={project.title}
            >
              <div
                className="absolute inset-0 -z-10 opacity-5"
                style={{ backgroundImage: `url('/images/grain.jpg')` }}
              ></div>
              <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                <div className="lg:pb-16">
                  <div className="bg-gradient-to-r gap-2 from-emerald-300 to-sky-400 inline-flex font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text">
                    <span>{project.company}</span>
                    <span>&bull;</span>
                    <span>{project.year}</span>
                  </div>

                  <h3 className="font-serif text-2xl mt-2 md:text-4xl md:mt-5">
                    {project.title}
                  </h3>
                  <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
                  <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                    {project.results.map((result) => (
                      <li
                        key={result.id}
                        className="flex gap-2 text-sm md:text-base text-white/50"
                      >
                        <CheckCircleIcon className="size-5 md:size-6" />
                        {result.title}
                      </li>
                    ))}
                  </ul>
                  {/* TODO: LINK */}
                  <a href={project.link}>
                    {/* TODO: BUTTONS */}
                    <button className="bg-white text-gray-950 h-12 w-full rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8 md:w-auto">
                      Visit Live Site
                      <ArrowUpRight className="size-4" />
                    </button>
                  </a>
                </div>
                <div>
                  <Image
                    src={project.image}
                    alt={project.title}
                    className="mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none"
                  />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
