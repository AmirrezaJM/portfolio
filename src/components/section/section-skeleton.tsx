import Container from "@/components/section/Container";

type SectionSkeletonProps = {
  title: string;
  lines?: number;
};

export default function SectionSkeleton({ title, lines = 3 }: SectionSkeletonProps) {
  return (
    <section className="w-full py-12">
      <Container>
        <div className="space-y-4 rounded-3xl border border-white/5 bg-white/5 p-6 shadow-[0_25px_60px_-30px_rgba(0,0,0,0.8)] backdrop-blur">
          <div className="h-4 w-32 animate-pulse rounded-full bg-white/20" aria-hidden />
          <h2 className="text-2xl font-semibold text-white/70">{title}</h2>
          <div className="space-y-3">
            {Array.from({ length: lines }).map((_, index) => (
              <div key={`${title}-line-${index}`} className="h-3 w-full animate-pulse rounded-full bg-white/10" aria-hidden />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
