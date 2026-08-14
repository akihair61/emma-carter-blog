import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About — Emma Carter",
  description: "About Emma Carter, London-born beauty and travel blogger based in Bangkok.",
  alternates: { canonical: "/about" },
  openGraph: {
    type: "profile",
    url: "/about",
    siteName: "Emma Carter",
    locale: "en_GB",
    title: "About — Emma Carter",
    description: "About Emma Carter, London-born beauty and travel blogger based in Bangkok.",
  },
};

export default function AboutPage() {
  return (
    <div>
      {/* Hero */}
      <div className="relative h-72 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1508009603885-50cf7c579365?w=1400&q=80"
          alt="Bangkok"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0" style={{ backgroundColor: "rgba(0,0,0,0.45)" }} />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="font-serif text-5xl font-bold text-white">About</h1>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-6 py-16">
        <div className="flex flex-col md:flex-row gap-12 items-start">
          <div className="flex-shrink-0 text-center">
            <img
              src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&q=80"
              alt="Emma Carter"
              className="w-48 h-48 rounded-full object-cover mx-auto mb-3"
            />
            <p className="font-serif text-lg font-bold text-stone-900">Emma Carter</p>
            <p className="text-stone-400 text-sm font-light">Bangkok, Thailand</p>
          </div>

          <div className="prose flex-1">
            <p>
              I&apos;m Emma Carter — London-born, Bangkok-based, and firmly in the camp of people who believe that good hair is non-negotiable regardless of what country you&apos;re living in.
            </p>
            <p>
              I moved to Thailand in 2022 for what was supposed to be a six-month stint. Four years later I&apos;m still here, and I&apos;ve spent a meaningful portion of that time tracking down the best beauty services this city has to offer.
            </p>
            <p>
              My standards are high and my patience for mediocre experiences is low. Everything I write about I&apos;ve tried myself, paid for myself, and formed my own opinion on. No sponsorships, no freebies.
            </p>
            <h2>What I Write About</h2>
            <p>
              Primarily hair — because it&apos;s the hardest thing to get right abroad, and because when you find someone who does it properly, it&apos;s worth telling people about.
            </p>
            <h2>Why Bangkok?</h2>
            <p>
              Bangkok has extraordinary quality across almost every category of beauty and wellness — if you know where to look. The city rewards people who do their research, and the best services are rarely the ones with the most visible marketing.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
