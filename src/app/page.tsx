import AboutView from "@/modules/about/view/about-view";
import StackView from "@/modules/stack/view/stack-view";
import ReviewView from "@/modules/testimonials/view/review-view";
export default function Home() {
  return (
    <>
      <AboutView />
      <StackView />
      <ReviewView />
    </>
  )
}