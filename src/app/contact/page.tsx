import PageHero from "@/components/page-hero";
import SectionLabel from "@/components/section-label";
import { ArrowUpRight, Mail, Phone, MapPin } from "lucide-react";

const faq = [
  {
    q: "What services does your studio offer?",
    a: "We specialize in branding, website design and development, social media marketing, paid ads, SEO, and content strategy.",
  },
  {
    q: "How do you determine the right strategy?",
    a: "Every project starts with a discovery phase where we analyze your goals, audience, and competitors. From there we craft a custom strategy.",
  },
  {
    q: "How long does a typical project take?",
    a: "Project timelines vary depending on scope. A branding or website project typically takes 4–8 weeks; campaigns are ongoing.",
  },
  {
    q: "Do you work with businesses in any industry?",
    a: "Yes — we&rsquo;ve worked with startups, tech companies, e-commerce brands, real estate firms, and service providers. Our process adapts.",
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact us"
        title="Let’s talk."
        subtitle="Tell us a little about what you&rsquo;re building. We typically reply within one business day."
      />

      <section className="pb-32">
        <div className="mx-auto max-w-[1320px] px-6">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
            <form className="md:col-span-7 grid grid-cols-1 gap-3 rounded-3xl border border-border bg-card p-6 sm:grid-cols-2 md:p-10">
              <Field label="Name" placeholder="Your name" />
              <Field label="Email" placeholder="you@studio.com" type="email" />
              <Field label="Company" placeholder="Where you work" />
              <Field label="Budget" placeholder="$10k — $50k" />
              <div className="sm:col-span-2">
                <label className="text-[11px] uppercase tracking-[0.2em] text-muted">
                  Project
                </label>
                <textarea
                  rows={5}
                  placeholder="Tell us about your project, timeline, and what success looks like."
                  className="mt-2 w-full resize-none rounded-2xl border border-border bg-background/60 p-4 text-sm outline-none focus:border-foreground"
                />
              </div>
              <div className="sm:col-span-2 flex items-center justify-between border-t border-border pt-5">
                <p className="text-xs text-muted">
                  By contacting us, you accept our Terms and Privacy Policy.
                </p>
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-3 text-sm text-background transition-transform hover:-translate-y-0.5"
                >
                  Send message
                  <ArrowUpRight className="size-4" />
                </button>
              </div>
            </form>

            <div className="md:col-span-5 space-y-3">
              <Detail
                icon={<Mail className="size-4" />}
                label="New projects / Business"
                value="contact@monostudio.io"
              />
              <Detail
                icon={<Mail className="size-4" />}
                label="General inquiries"
                value="info@monostudio.io"
              />
              <Detail
                icon={<Phone className="size-4" />}
                label="Phone"
                value="(+1) 930 046 720"
              />
              <Detail
                icon={<MapPin className="size-4" />}
                label="Location"
                value="Roc Boronat 112, Floor 3 · Door 2 (08018) Barcelona, Spain"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="pb-32">
        <div className="mx-auto max-w-[1320px] px-6">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
            <div className="md:col-span-4">
              <SectionLabel>FAQ</SectionLabel>
              <h2 className="mt-6 font-display text-5xl md:text-6xl leading-[0.95]">
                Common questions.
              </h2>
            </div>
            <ul className="md:col-span-8 divide-y divide-border border-y border-border">
              {faq.map((item) => (
                <li key={item.q} className="py-7">
                  <div className="font-display text-2xl">{item.q}</div>
                  <p className="mt-3 max-w-2xl text-sm text-muted">{item.a}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}

function Field({
  label,
  placeholder,
  type = "text",
}: {
  label: string;
  placeholder: string;
  type?: string;
}) {
  return (
    <div>
      <label className="text-[11px] uppercase tracking-[0.2em] text-muted">
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        className="mt-2 w-full rounded-2xl border border-border bg-background/60 p-4 text-sm outline-none focus:border-foreground"
      />
    </div>
  );
}

function Detail({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-3xl border border-border bg-card p-6">
      <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] text-muted">
        {icon}
        {label}
      </div>
      <div className="mt-3 text-lg">{value}</div>
    </div>
  );
}
