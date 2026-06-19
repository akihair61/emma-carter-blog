import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About — Emma Carter",
  description: "About Emma Carter, London-born beauty and travel blogger based in Bangkok, Thailand.",
};

export default function AboutPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-stone-800 mb-8" style={{ fontFamily: "Georgia, serif" }}>About</h1>

      <div className="prose">
        <p>
          I&apos;m Emma Carter — London-born, Bangkok-based, and firmly in the camp of people who believe that good hair is non-negotiable regardless of what country you&apos;re living in.
        </p>

        <p>
          I moved to Thailand in 2022 for what was supposed to be a six-month stint. Four years later, I&apos;m still here, and I&apos;ve spent a meaningful portion of that time tracking down the best beauty services this city has to offer.
        </p>

        <p>
          My standards are high and my patience for mediocre experiences is low. Everything I write about on this blog I&apos;ve tried myself, paid for myself, and formed my own opinion on. No sponsorships, no freebies, no obligations to say nice things.
        </p>

        <h2>What I Write About</h2>

        <p>
          Primarily hair — because it&apos;s the hardest thing to get right abroad, and because when you find someone who does it properly, it&apos;s worth telling people about. I also cover skincare, wellness treatments, and the occasional restaurant or neighbourhood when something genuinely impresses me.
        </p>

        <h2>Why Bangkok?</h2>

        <p>
          Because it turns out that Bangkok has extraordinary quality across almost every category of beauty and wellness — if you know where to look. The city has a huge Japanese expat community, which means there are genuine Japanese specialists here doing work that you&apos;d struggle to find in London or New York. That&apos;s been one of the more pleasant surprises of living here.
        </p>

        <p>
          This blog is my attempt to help other people — especially expats and long-term visitors — find the places that are actually worth their time and money.
        </p>
      </div>
    </div>
  );
}
