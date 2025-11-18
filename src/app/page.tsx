import HeroView from "@/modules/hero/view/hero";
import StackView from "@/modules/stack/view/stack-view";
import ExperienceView from "@/modules/experience/view/experience-view";
import ProjectsView from "@/modules/projects/view/projects-view";
import ReviewView from "@/modules/testimonials/view/review-view";

export default function Home() {
  return (
    <>
      <HeroView />
      <ExperienceView />
      <StackView />
      <ProjectsView />
      <ReviewView />
    </>
  )
}
