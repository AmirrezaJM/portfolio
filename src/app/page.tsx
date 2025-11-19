
import dynamic from "next/dynamic";
import HeroView from "@/modules/hero/view/hero";
import SectionSkeleton from "@/components/section/section-skeleton";
import ScrollDockClient from "@/components/navigation/scroll-dock-client";

const ExperienceView = dynamic(() => import("@/modules/experience/view/experience-view"), {
  loading: () => <SectionSkeleton title="Experience" />,
  ssr: true,
});

const ProjectsView = dynamic(() => import("@/modules/projects/view/projects-view"), {
  loading: () => <SectionSkeleton title="Personal Projects" />,
  ssr: true,
});

const StackView = dynamic(() => import("@/modules/stack/view/stack-view"), {
  loading: () => <SectionSkeleton title="Skills" />,
  ssr: true,
});

const ReviewView = dynamic(() => import("@/modules/testimonials/view/review-view"), {
  loading: () => <SectionSkeleton title="Testimonials" />,
  ssr: true,
});

const FooterView = dynamic(() => import("@/modules/footer/view/footer-view"), {
  loading: () => <SectionSkeleton title="Contact" lines={2} />,
  ssr: true,
});


export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#03030a] text-white">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "linear-gradient(90deg, rgba(255,255,255,0.25) 1px, transparent 1px), linear-gradient(0deg, rgba(255,255,255,0.2) 1px, transparent 1px)", backgroundSize: "120px 120px" }} />
        <div className="absolute -top-40 left-1/4 h-[480px] w-[480px] rounded-full bg-[radial-gradient(circle,_rgba(76,139,245,0.45),_transparent_70%)] blur-3xl" />
        <div className="absolute right-0 h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle,_rgba(255,138,195,0.35),_transparent_65%)] blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.05),_transparent_55%)]" />
      </div>
      <div className="relative flex min-h-screen flex-col gap-12">
        <main className="flex flex-col gap-12">
          <HeroView />
          <ExperienceView />
          <ProjectsView />
          <StackView />
          <ReviewView />
          <FooterView />
        </main>
        <ScrollDockClient />
      </div>
    </div>
  );
}
