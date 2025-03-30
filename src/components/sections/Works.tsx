import { CardHeader } from "@/components/CardHeader";
import { WorkCard } from "../WorkCard";
import { FaBrain, FaCode, FaGlobe, FaHtml5 } from "react-icons/fa";
import { GiTeacher } from "react-icons/gi";

export function Works() {
  return (
    <section id="work" className="pb-12 sm:pb-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 [container-type:inline-size]">
        <CardHeader title="My Latest Work" />
        <div className="space-y-12 sm:space-y-16 md:space-y-20">
          <WorkCard
            title="01 | Fullstack developer"
            image="/image1.avif"
            icon={<FaBrain size={20} />}
            heading="Smart Platform for Business Opportunity Detection"
            description="Karhuno is an intelligent business signal analysis system that helps companies identify potential business opportunities by analyzing digital footprints."
          />
          <WorkCard
            title="02 | Frontend Engineer"
            image="/image2.avif"
            icon={<FaGlobe size={20} />} 
            heading="Building SEO-Optimized Travel Platforms"
            description="PAPGroup is a Web Design Company in Tehran. We're responsible for Designing and Implementing websites, which are Fully Designed with responsive and SEO features, for many Travel agencies large and small, including Alefba, ShabavizTour, Trip, etc. As a Front-end Engineer, I'm working in the technical team"
          />

          <WorkCard
            title="03 | Teaching & Curriculum Design"
            image="/zharfa-site-preview.jpg"
            icon={<GiTeacher />}
            heading="Frontend Teaching & Interactive Coding Programs"
            description={`Zharfa is a space-themed educational platform focused on teaching programming to kids and teens in an engaging and gamified way. The theme mimics a cosmic journey — where students are “young astronauts” exploring the galaxy of coding!.`}
          />
          <WorkCard
            title="04 | Frontend Developer"
            image="/zharfa-site-preview.jpg"
            icon={<GiTeacher />}
            heading="Teaching Web Development"
            description={`Zharfa is a space-themed educational platform focused on teaching programming to kids and teens in an engaging and gamified way. The theme mimics a cosmic journey — where students are “young astronauts” exploring the galaxy of coding!.`}
          />
          <WorkCard
            title="05 | Junior Frontend Developer"
            image="/almas-cover.jpg"
            icon={<FaHtml5 />}
            heading="Creating Interfaces for Healthcare Management Systems"
            description={`At Almas Teb Rayan, I worked on the frontend of an internal healthcare service platform, and I implemented responsive UI components using HTML, CSS, and JavaScript, focusing on clarity and accessibility.
          This role helped strengthen my foundation in frontend performance and layout best practices for real-world apps.`}
          />

          <WorkCard
            title="06 | Research Internship – Final Project"
            image="/azad-research.jpg"
            icon={<FaCode />}
            heading="Creating Interfaces for Healthcare Management Systems"
            description={`During my bachelor's program, I designed and implemented the frontend for an academic IHMS dashboard as part of my thesis.
              Built using vanilla HTML, CSS, and JS, the project emphasized clean structure and user flow.
              This project improved my time management and introduced me to real-world UI/UX constraints in education software.`}
          />
        </div>
      </div>
    </section>
  );
}
