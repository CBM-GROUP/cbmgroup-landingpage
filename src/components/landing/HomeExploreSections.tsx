import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { brands } from "@/data/site";

const destinations = [
  {
    eyebrow: "Our purpose",
    title: "Ideas with impact.",
    description:
      "See how we invest in people, ideas, and ecosystems that unlock long-term value.",
    href: "/initiatives",
  },
  {
    eyebrow: "Get to know us",
    title: "The people behind the stories.",
    description:
      "Discover the group, our creative pillars, and the people building what comes next.",
    href: "/about",
  },
  {
    eyebrow: "Your next chapter",
    title: "Make room for more.",
    description:
      "Explore teams and opportunities across the CBM Group.",
    href: "/careers",
  },
];

const featuredBrandIds = ["cbm-tv", "cbm-film", "cbm-advertising"];
const partnerBrands = [
  { name: "Soul", image: "/brands/Havek.png" },
  { name: "Halvek Technologies", image: "/brands/ICT HUB.jpg" },
  { name: "Sumic IT Solutions", image: "/brands/sumic1.jpg" },
  {
    name: "National ICT Innovation Hub",
    image: "/brands/WhatsApp Image 2026-10-02 at 4.47.59 PM.jpeg",
  },
  {
    name: "Brand Video",
    image: "/brands/WhatsApp Video 2026-10-02 at 17.44.33.mp4",
  },
  {
    name: "TFCS",
    image: "/brands/TFCS Logo.jpg.jpeg",
  },
];

export function HomeCompaniesSection() {
  const featuredBrands = brands
    .filter((brand) => featuredBrandIds.includes(brand.id))
    .sort(
      (first, second) =>
        featuredBrandIds.indexOf(first.id) - featuredBrandIds.indexOf(second.id),
    );

  return (
    <section
      aria-labelledby="home-companies-heading"
      className="mx-auto max-w-[1600px] px-6 pb-16 sm:px-10 sm:pb-20 lg:px-16 lg:pb-24"
    >
      <div className="flex flex-col gap-5 border-b border-slate-200 pb-6 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h2
            id="home-companies-heading"
            className="mt-3 max-w-3xl text-3xl leading-tight tracking-[-0.045em] text-slate-950 sm:text-4xl lg:text-5xl"
          >
            The CBM universe
          </h2>
        </div>
      </div>

      <div className="mt-7 grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-5">
        {featuredBrands.map((brand) => (
          <a
            key={brand.id}
            href={brand.href}
            target="_blank"
            rel="noreferrer"
            className="group flex min-h-[190px] flex-col justify-between overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-4 shadow-[0_12px_36px_rgba(15,23,42,0.04)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_48px_rgba(15,23,42,0.1)] sm:min-h-[220px] sm:rounded-[1.5rem] sm:p-5"
          >
            <div className="relative flex h-32 items-center justify-center sm:h-40">
              {brand.image ? (
                <Image
                  src={brand.image}
                  alt={`${brand.name} logo`}
                  fill
                  sizes="(max-width: 640px) 45vw, (max-width: 1024px) 30vw, 260px"
                  className="object-contain p-1 transition-transform duration-300 group-hover:scale-[1.04]"
                />
              ) : (
                <span className="text-xl font-semibold text-slate-800">{brand.name}</span>
              )}
            </div>
            <div className="mt-4 flex items-center justify-between gap-2 border-t border-slate-100 pt-3">
              <span className="text-sm font-semibold tracking-tight text-slate-900 sm:text-base">
                {brand.name}
              </span>
              <ArrowUpRight className="h-4 w-4 shrink-0 text-[#167765] transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </div>
          </a>
        ))}
      </div>

      <div className="mt-6 flex justify-end">
        <Link
          href="/companies"
          className="group inline-flex w-fit items-center gap-2 rounded-full bg-[#36BEA3] px-5 py-3 text-sm font-semibold text-white shadow-[0_10px_26px_rgba(54,190,163,0.22)] transition-all hover:-translate-y-0.5 hover:bg-[#2aa58f]"
        >
          See all companies
          <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </Link>
      </div>
    </section>
  );
}

export function HomeDestinationsSection() {
  return (
    <section
      aria-labelledby="home-destinations-heading"
      className="mx-auto max-w-[1600px] px-6 pb-20 pt-8 sm:px-10 sm:pb-28 sm:pt-10 lg:px-16 lg:pb-32"
    >
      <div className="mb-7 flex flex-col gap-3 sm:mb-9 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h2
            id="home-destinations-heading"
            className="text-3xl leading-tight tracking-[-0.045em] text-slate-950 sm:text-4xl"
          >
            More to discover at CBM.
          </h2>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {destinations.map((destination) => (
          <Link
            key={destination.href}
            href={destination.href}
            className="group relative flex min-h-[260px] flex-col justify-between overflow-hidden rounded-[1.75rem] border border-[#cce9e2] bg-gradient-to-br from-white to-[#eaf7f3] p-6 transition duration-300 hover:-translate-y-1 hover:border-[#36BEA3] hover:shadow-[0_20px_48px_rgba(15,23,42,0.1)] sm:min-h-[300px] sm:p-8"
          >
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-600">
                {destination.eyebrow}
              </span>
            </div>
            <div>
              <h3 className="max-w-xs text-2xl leading-tight tracking-[-0.04em] text-slate-950 sm:text-3xl">
                {destination.title}
              </h3>
              <p className="mt-3 max-w-sm text-sm leading-6 text-slate-600">
                {destination.description}
              </p>
              <span className="mt-5 inline-flex w-fit items-center gap-2 rounded-full bg-[#36BEA3] px-4 py-2.5 text-sm font-semibold text-white transition-colors group-hover:bg-[#2aa58f]">
                Find out more
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </span>
            </div>
          </Link>
        ))}
      </div>

      <div className="mt-12 border-t border-slate-200 pt-8 sm:mt-16 sm:pt-10">
        <p className="mb-14 text-sm font-bold uppercase tracking-[0.18em] text-[#167765] sm:mb-16">
          Our Partners
        </p>
        <div className="overflow-hidden" aria-label="Partner logos">
          <div className="partner-marquee flex w-max items-center gap-6">
            {[0, 1].map((copy) => (
              <div
                key={copy}
                className="flex shrink-0 items-center gap-6"
                aria-hidden={copy === 1}
              >
                {partnerBrands.map((partner) => (
                  <div
                    key={partner.name}
                    className="flex h-[140px] w-[250px] shrink-0 items-center justify-center rounded-2xl border border-slate-200/80 bg-white p-3 shadow-[0_8px_24px_rgba(15,23,42,0.04)] sm:h-[160px] sm:w-[280px] sm:p-4"
                  >
                    {partner.image.endsWith('.mp4') ? (
                      <video
                        src={partner.image}
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="max-h-full w-full object-contain"
                      />
                    ) : (
                      <Image
                        src={partner.image}
                        alt={partner.name}
                        width={180}
                        height={80}
                        className="max-h-full w-full object-contain"
                      />
                    )}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
