import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";

const socialLinks = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/profile.php?id=61590769521434",
    src: "/social/facebook_logo_icon_147291.svg",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/cbmgroup_/",
    src: "/social/instagram_black_logo_icon_147122.svg",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/122863899/admin/dashboard/",
    src: "/social/linkedin_black_logo_icon_147114.svg",
  },
  {
    label: "X",
    href: "https://x.com/CBMGroup_",
    src: "/social/twitter_x_logo_icon.svg",
  },
  {
    label: "TikTok",
    href: "https://www.tiktok.com/@cbmgroup_",
    src: "/social/tiktok_logo_icon_144802.svg",
  },
];

const helpfulLinks = ["Services", "Support 24/7", "Terms And Condition"];
const services = ["Photography", "Support 24/7", "Guide"];

const contactItems = [
  { icon: Phone, label: "+256 776789133", href: "tel:+256776789133" },
  { icon: Mail, label: "cbmadvertisingads@gmail.com", href: "mailto:cbmadvertisingads@gmail.com" },
  { icon: MapPin, label: "National ICT Innovation Hub in Nakawa, Kampala, Uganda", href: "#map" },
];

export default function Footer() {
  return (
    <footer className="relative mt-20 overflow-hidden text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.15),transparent_35%),radial-gradient(circle_at_bottom_right,_rgba(255,255,255,0.08),transparent_30%)]" />

      <div className="relative mx-auto max-w-7xl px-4 pb-10 pt-10 sm:px-6 lg:px-8">
        <div className="rounded-[2.2rem] border border-white/15 bg-[#36BEA3] px-6 py-8 shadow-[0_22px_60px_rgba(0,0,0,0.12)] backdrop-blur-sm sm:px-8 lg:px-10">
          <div className="flex w-full flex-col items-center justify-center gap-6 text-center">
            <div className="flex items-center justify-center gap-3">
              <div className="rounded-xl bg-white/95 p-2 shadow-[0_0_0_1px_rgba(255,255,255,0.35)]">
                <img src="/logo.png" alt="CBM Group logo" className="h-16 w-auto" />
              </div>
              <div>
                <div className="text-2xl font-black tracking-tight">CBM Group</div>
              </div>
            </div>

            <p className="max-w-md text-xl font-medium leading-snug text-white/95 sm:text-2xl">
              We Are Cultural Creative.
            </p>

            <div className="flex flex-col items-center justify-center text-center">
              <h3 className="text-base font-medium italic text-white/80">Follow Us on:</h3>
              <div className="mt-2 flex w-full flex-wrap items-center justify-center gap-3">
                {socialLinks.map(({ href, label, src }) => (
                  <Link
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={label}
                    className="group inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/70 bg-white/15 text-white shadow-[0_0_0_1px_rgba(255,255,255,0.12)] transition-transform duration-200 hover:scale-105 hover:bg-white/20"
                  >
                    <img src={src} alt={label} className="h-10 w-auto object-contain" />
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-10 flex flex-col gap-5 border-t border-white/20 pt-6 text-base text-white/90 md:flex-row md:items-center md:justify-between">
            <div className="flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center sm:gap-8">
              {contactItems.map(({ icon: Icon, label, href }) => (
                <a key={label} href={href} className="inline-flex items-center gap-2 text-white/90 transition hover:text-white">
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/60 bg-white/10 text-white">
                    <Icon className="h-4 w-4" />
                  </span>
                  <span>{label}</span>
                </a>
              ))}
            </div>
          </div>

          <div className="mt-6 text-center text-lg font-medium text-white/90">
            © 2026 CBM Group. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
