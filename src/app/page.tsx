import { Hero } from "@/components/sections/Hero";
import { Works } from "@/components/sections/Works";
import { Skills } from "@/components/sections/Skills";
// import { Contact } from "@/components/sections/Contact";
export default function Home() {
  return (
    <div>
      <main>
        <Hero />
        <Works />
        <Skills />
        {/* <Contact /> */}
      </main>
    </div>
  );
}
