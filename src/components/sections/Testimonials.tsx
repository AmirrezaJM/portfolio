import memojiAvatar1 from "@/assets/images/memoji-avatar-1.png";
import memojiAvatar2 from "@/assets/images/memoji-avatar-2.png";
import memojiAvatar3 from "@/assets/images/memoji-avatar-3.png";
import memojiAvatar4 from "@/assets/images/memoji-avatar-4.png";
import memojiAvatar5 from "@/assets/images/memoji-avatar-5.png";
import Image from "next/image";
import { SectionHeader } from "../SectionHeader";
import { Card } from "../Card";

const testimonials = [
  {
    name: "Alex Turner",
    position: "Marketing Manager @ TechStartups",
    text: "Alex was instrumental in transforming our website into a powerful",
    avatar: memojiAvatar1,
  },
  {
    name: "Alex Turner",
    position: "Marketing Manager @ TechStartups",
    text: "Alex was instrumental in transforming our website into a powerful",
    avatar: memojiAvatar2,
  },
  {
    name: "Alex Turner",
    position: "Marketing Manager @ TechStartups",
    text: "Alex was instrumental in transforming our website into a powerful",
    avatar: memojiAvatar3,
  },
  {
    name: "Alex Turner",
    position: "Marketing Manager @ TechStartups",
    text: "Alex was instrumental in transforming our website into a powerful",
    avatar: memojiAvatar4,
  },
  {
    name: "Alex Turner",
    position: "Marketing Manager @ TechStartups",
    text: "Alex was instrumental in transforming our website into a powerful",
    avatar: memojiAvatar5,
  },
];

export function TestimonialsSection() {
  return (
    <div className="py-16 lg:py-24">
      <div className="container">
        <SectionHeader
          eyebrow="Happy Clients"
          title="What Clients Says about Me"
          description="Don't just take my word for it. See what my clients have to say about my work."
        />
        <div className="mt-16 lg:mt-24 flex overflow-x-clip [mask-image: linear-gradient(to_right, transparent, black_10%, black_90%, transparent)]">
          <div className="flex gap-8 flex-none">
            {testimonials.map((testimonial) => (
              <Card
                key={testimonial.name}
                className="max-w-xs p-6 md:p-8 md:max-w-md"
              >
                <div
                  className="absolute inset-0 opacity-5 -z-10"
                  style={{ backgroundImage: `url('/images/grain.jpg')` }}
                ></div>
                <div className="flex gap-4 items-center">
                  <div className="size-14 bg-gray-700 inline-flex rounded-full items-center justify-center flex-shrink-0">
                    <Image
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="max-h-full"
                    />
                  </div>
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-white/40">
                    {testimonial.position}
                  </div>
                </div>
                <p className="mt-4 md:mt-6 text-sm md:text-base">{testimonial.text}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
