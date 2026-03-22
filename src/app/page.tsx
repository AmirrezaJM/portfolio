
import dynamic from "next/dynamic";
import HeroView from "@/features/hero/view/hero";
import SectionSkeleton from "@/features/section-skeleton";
import { Header } from "@/features/Header";

const ExperienceView = dynamic(() => import("@/features/experience/view/experience-view"), {
  loading: () => <SectionSkeleton title="Experience" />,
  ssr: true,
});

const ProjectsView = dynamic(() => import("@/features/projects/view/projects-view"), {
  loading: () => <SectionSkeleton title="Personal Projects" />,
  ssr: true,
});

const TerminalView = dynamic(() => import("@/features/terminal/view/terminal-view"), {
  loading: () => <SectionSkeleton title="Terminal" />,
  ssr: true,
});

const GithubView = dynamic(() => import("@/features/github/view/github-view"), {
  loading: () => <SectionSkeleton title="GitHub Activity" />,
  ssr: true,
});

const StackView = dynamic(() => import("@/features/stack/view/stack-view"), {
  loading: () => <SectionSkeleton title="Skills" />,
  ssr: true,
});

const ReviewView = dynamic(() => import("@/features/testimonials/view/review-view"), {
  loading: () => <SectionSkeleton title="Testimonials" />,
  ssr: true,
});

const ContactView = dynamic(() => import("@/features/contact/view/contact-view"), {
  loading: () => <SectionSkeleton title="Contact" />,
  ssr: true,
});

const GuestbookView = dynamic(() => import("@/features/guestbook/view/guestbook-client"), {
  loading: () => <SectionSkeleton title="Guestbook" />,
  ssr: true,
});

const FooterView = dynamic(() => import("@/features/footer/view/footer-view"), {
  loading: () => null,
  ssr: true,
});


export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#0f0804] text-white">
      <Header />
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 opacity-[0.025]" style={{ backgroundImage: "linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(0deg, rgba(255,255,255,0.12) 1px, transparent 1px)", backgroundSize: "120px 120px" }} />
        <div className="absolute -top-40 left-1/4 h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle,_rgba(194,87,26,0.25),_transparent_70%)] blur-3xl" />
        <div className="absolute right-0 top-0 h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle,_rgba(146,64,14,0.18),_transparent_65%)] blur-3xl" />
        <div className="absolute bottom-0 left-1/2 h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,_rgba(120,53,15,0.15),_transparent_65%)] blur-3xl" />
      </div>
      <div className="relative flex min-h-screen flex-col gap-12 pt-[57px]">
        <main className="flex flex-col gap-12">
          <HeroView />
          <ExperienceView />
          <ProjectsView />
          <TerminalView />
          <GithubView />
          <StackView />
          <ReviewView />
          <ContactView />
          <GuestbookView />
        </main>
        <FooterView />
      </div>
    </div>
  );
}
