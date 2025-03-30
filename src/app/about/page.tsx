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
            category="music"
            title="Flow"
            artist="Shawn James"
            image="/music1.jpg"
            color="#3b82f6"
          />
          <MusicCard
            category="chill"
            title="Gwyn, Lord of Cinder"
            artist=""
            image="/music2.jpg"
            color="#b91c1c"
          />
          <MusicCard
            category="creative"
            title=" (U & I)"
            artist="Shawn James"
            image="/music3.jpg"
            color="#9333ea"
          />
          <MusicCard
            category="loneliness"
            title="Food for the Soul"
            artist="Shawn James"
            image="/music4.jpg"
            color="#0ea5e9"
          />
        </div>
      </div>
    </div>
  );
}
