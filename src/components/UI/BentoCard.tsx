interface BentoCardProps {
  src: string;
  title: React.ReactNode;
  description?: string;
}

export default function BentoCard({ src, title, description }: BentoCardProps) {
  return (
    <main className="size-full relative">
      <video
        src={src}
        loop
        muted
        autoPlay
        className="absolute inset-0 object-cover object-center size-full"
      />
      <div className="relative z-10 flex size-full flex-col justify-between p-5 text-blue-50">
        <div>
          <h1 className="bento-title special-font">{title}</h1>

          <p className="mt-3 max-w-64 text-xs md:text-base">{description}</p>
        </div>
      </div>
    </main>
  );
}
