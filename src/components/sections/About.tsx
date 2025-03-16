import { Card } from "../Card";
import { SectionHeader } from "../SectionHeader";
import BookImage from "../../../public/images/book-cover.png";
import Image from "next/image";
import JavascriptIcon from "../../../public/icons/square-js.svg";
import HTMLIcon from "../../../public/icons/html5.svg";
import CssIcon from "../../../public/icons/css3.svg";
import ReactIcon from "../../../public/icons/react.svg";
import ChromeIcon from "../../../public/icons/chrome.svg";
import GithubIcon from "../../../public/icons/github.svg";
import mapImage from "../../../public/images/map.png";
import smileMemoji from "../../../public/images/memoji-smile.png";
import { CardHeader } from "../CardHeader";
import { ToolboxItems } from "../ToolboxItem";

const toolboxItems = [
  {
    title: "JavaScript",
    iconType: JavascriptIcon,
  },
  {
    title: "HTML5",
    iconType: HTMLIcon,
  },
  { title: "CSS3", iconType: CssIcon },
  { title: "React", iconType: ReactIcon },
  { title: "Chrome", iconType: ChromeIcon },
  { title: "Github", iconType: GithubIcon },
];

const hobbies = [
  { title: "Painting", emoji: "", left: "5%", top: "5%" },
  { title: "Photography", emoji: "", left: "50%", top: "5%" },
  { title: "Gaming", emoji: "", left: "50%", top: "5%" },
  { title: "Hiking", emoji: "", left: "35%", top: "40%" },
  { title: "Music", emoji: "", left: "70%", top: "45%" },
  { title: "Fitness", emoji: "", left: "5%", top: "65%" },
  { title: "Reading", emoji: "", left: "45%", top: "70%" },
];

export function About() {
  return (
    <div className="py-20 lg:py-28">
      <div className="container">
        <SectionHeader
          title="A Glimpse Into my World"
          eyebrow="About Me"
          description="Learn more about who I am, what I do, and what inspires me"
        />
        <div className="mt-20 flex flex-col gap-8">
          <div className="md:grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3">
            <Card className="h-[320px] p-0 flex flex-col col-span-3 md:col-span-2 lg:col-span-1">
              <CardHeader
                title="My Reads"
                description="Explore the books shaping my perspectives."
              />
              <div className="w-40 mx-auto mt-2 md:mt-0">
                <Image src={BookImage} alt="Book Cover" />
              </div>
            </Card>
            <Card className="h-[320px] p-0 md:col-span-3 lg:col-span-2">
              <CardHeader
                title="My Toolbox"
                description="Explore the technologies and tools I use to craft exceptional
                digital experiences."
              />
              <ToolboxItems items={toolboxItems} />
              <ToolboxItems
                items={toolboxItems}
                className="mt-6"
                itemsWrapperClassName="-translate-x-1/2"
              />
            </Card>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            <Card className="h-[320px] p-0 flex flex-col md:col-span-3 lg:col-span-2">
              <CardHeader
                title="Beyond the Code"
                description="Explore the technologies and tools I use to craft exceptional
                digital experiences."
              />
              <div className="relative">
                {hobbies.map((hobby) => (
                  <div
                    className="inline-flex absolute gap-2 px-6 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full py-1.5"
                    style={{ left: hobby.left, top: hobby.top }}
                    key={hobby.title}
                  >
                    <span className="font-medium text-gray-950">
                      {hobby.title}
                    </span>
                    <span className="">{hobby.emoji}</span>
                  </div>
                ))}
              </div>
            </Card>
            <Card className="h-[320px] p-0 relative md:col-span-2 lg:col-span-1">
              <Image
                src={mapImage}
                alt="map"
                className="h-full w-full object-cover object-left-top"
              />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-20 rounded-full  bg-gradient-to-r from-emerald-300 to-sky-400 after:content-[''] after:absolute after:inset-0 after:outline-2 after:-outline-offset-2 after:outline-gray-950/30 after:rounded-full">
                <Image src={smileMemoji} alt="smiling emoji" />
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
