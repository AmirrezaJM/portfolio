import AboutCard from "@/components/AboutCard";
import MusicCard from "@/components/MusicCard";

export default function Page() {
  return (
    <div className="py-2 md:py-2 lg:py-4 relative z-0 overflow-x-clip min-h-screen">
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] min-h-[70vh] gap-6 max-w-7xl mx-auto">
        {/* Left Column */}
        <div className="grid gap-4 lg:col-span-1 h-full">
          <AboutCard />
        </div>
        {/* Right Column: Music Grid */}
        <div className="grid grid-cols-2 grid-rows-2 gap-4 h-full">
          <MusicCard
            category="Cafeteria"
            title="Flow"
            artist="Shawn James"
            image="/shawnJames.jpg"
            color="#3b82f6"
          />
          <MusicCard
            category="R&P"
            title="Goodbye"
            artist="Ramsey"
            image="/ramsey.webp"
            color="#b91c1c"
          />
          <MusicCard
            category="Creative"
            title="Gun for hire"
            artist="Woodkid"
            image="/woodkid.jpeg"
            color="#9333ea"
          />
          <MusicCard
            category="Loneliness"
            title="Throgh the valley"
            artist="Shawn James"
            image="/shawnJames.jpg"
            color="#0ea5e9"
          />
        </div>
      </div>
    </div>
  );
}
