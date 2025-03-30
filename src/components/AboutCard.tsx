// components/AboutCard.tsx
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const AboutCard = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 md:px-0 [container-type:inline-size]">
      <Card className="bg-[#111] text-white border border-white/10 shadow-md backdrop-blur-sm w-full">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-white">About</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6 text-white/80 text-sm">
          <section>
            <p className="uppercase text-xs text-neutral-500 mb-1">Today</p>
            <p>
              I&apos;m Amirreza Jolani Mameghani — a passionate and
              solution-driven Full-Stack Developer with over 4 years of hands-on
              experience building modern web applications using JavaScript
              frameworks like React.js, Vue.js, and Nuxt.js. My background
              combines strong front-end engineering with an eye for user
              experience, backed by practical experience in both startup
              environments and larger teams. From building SEO-optimized landing
              pages to contributing to full-fledged internal platforms, I enjoy
              working across the stack to deliver robust, maintainable, and
              user-friendly software. I have contributed to companies such as
              PAP Group Ltd., Pody, and Almas Teb Rayan, where I implemented
              responsive UI components, collaborated on scalable architectures,
              and applied technologies like Tailwind CSS, Vitepress, and
              Laravel. I also have a teaching background at Zharfa Academy,
              where I led courses on front-end development and special
              education, reflecting my passion for knowledge sharing. My
              language proficiency includes a Band 6.5 IELTS score,
            </p>
          </section>
          <section>
            <p className="uppercase text-xs text-neutral-500 mb-1">Childhood</p>
            <p>
              From a young age, I was captivated by technology—especially video
              games. What began as childhood curiosity turned into a passion for
              understanding how games are made and how computers work. I spent
              time reading magazines and documentation, teaching myself how the
              Internet works and even learning programming languages like C# and
              building with Unity on my own. This early self-driven exploration
              laid the foundation for my love of coding, problem-solving, and
              the world of software development.
            </p>
          </section>
          <section>
            <p className="uppercase text-xs text-neutral-500 mb-1">Growth</p>
            <p>
              As I continue evolving in my career, I’ve embraced emerging
              technologies like Web3, while deepening my expertise in full-stack
              development. I thrive in environments that challenge me to learn,
              adapt, and innovate. Whether I am debugging a complex backend
              integration or refining UI details, I approach every project with
              curiosity, collaboration, and a drive to grow—not just as a
              developer, but as a problem-solver and teammate.
            </p>
          </section>
        </CardContent>
      </Card>
    </div>
  );
};

export default AboutCard;
