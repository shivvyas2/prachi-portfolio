export type WorkImage = { src: string; alt: string };

export type WorkSection = {
  label: string;
  heading: string;
  body: string;
};

export type Work = {
  slug: string;
  title: string;
  client: string;
  role: string;
  year: string;
  /** Soft tinted background for the showcase card. */
  bg: string;
  /** Tailwind aspect class for the gallery thumbnails. */
  aspect: string;
  /** One-line summary, used on the home card hover & list page. */
  summary: string;
  /** Long intro paragraph for the case-study hero. */
  intro: string;
  /** Three thumbnail images for the home showcase card. */
  images: WorkImage[];
  /** Larger gallery for the case-study page. Falls back to `images` when absent. */
  gallery?: WorkImage[];
  /** Optional structured sections describing the project. */
  sections?: WorkSection[];
  /** Capability/topic tags. */
  tags?: string[];
};

export const works: Work[] = [
  {
    slug: "soundscape",
    title: "Soundscape",
    client: "Self-initiated · 2026",
    role: "Mobile App · Brand · UI",
    year: "2026",
    bg: "bg-[#efe9e1]",
    aspect: "aspect-[9/19.5]",
    summary:
      "A meditation companion that pairs mood, intention, and a soundtrack — designed for quiet rituals.",
    intro:
      "Soundscape is a meditation companion that turns a small daily ritual into something worth showing up for. The product asks three soft questions — how are you, what do you want, and what should you hear — and returns a curated session that fits the moment.",
    images: [
      { src: "/work/meditation-app/01-home.png", alt: "Soundscape — home screen with streak and minutes" },
      { src: "/work/meditation-app/02-mood.jpg", alt: "Soundscape — mood selection" },
      { src: "/work/meditation-app/03-music.png", alt: "Soundscape — soundtrack selection" },
    ],
    gallery: [
      { src: "/work/meditation-app/01-home.png", alt: "Home dashboard with daily streak" },
      { src: "/work/meditation-app/02-mood.jpg", alt: "Mood and intention selection" },
      { src: "/work/meditation-app/03-music.png", alt: "Soundtrack picker" },
    ],
    sections: [
      {
        label: "(01) Context",
        heading: "Designing for quiet, not for engagement.",
        body: "Most wellness apps borrow the dark patterns of social — streaks weaponised, notifications optimised. Soundscape is the opposite: a calm, opinionated surface that opens, asks a few honest questions, and gets out of the way.",
      },
      {
        label: "(02) Approach",
        heading: "A flow built around three small choices.",
        body: "Mood → intention → soundtrack. Each step is visually distinct, with a single primary action and a generous touch target. Selected states use a warm, considered brown that signals intent without shouting. The soundtrack picker leans on photography to make abstract feelings tangible.",
      },
      {
        label: "(03) Outcome",
        heading: "A product that feels finished.",
        body: "The result is a tight, opinionated app with a clear voice. The system extends to deeper screens — onboarding, library, premium — without losing its calm. The brand mark, type system, and motion language all came out of the same brief.",
      },
    ],
    tags: ["Product Design", "Brand", "UI", "Type", "Motion"],
  },
  {
    slug: "nova",
    title: "Nova",
    client: "Self-initiated · 2026",
    role: "Mobile App · Wellness · UI",
    year: "2026",
    bg: "bg-[#ece4d8]",
    aspect: "aspect-[9/19.5]",
    summary:
      "A wellness platform that fuses weight tracking with bedtime stories, journaling, and reviews.",
    intro:
      "Nova is a wellness platform that treats data and storytelling as equal partners. Weight progress, sleep podcasts, and journaling live in the same warm, considered system — built around a soft brown palette and a calligraphic logotype that earns its softness.",
    images: [
      { src: "/work/nova/01-progress.png", alt: "Nova — weight progress" },
      { src: "/work/nova/02-podcast.jpg", alt: "Nova — podcast library" },
      { src: "/work/nova/03-podcast-details.jpg", alt: "Nova — podcast detail" },
    ],
    gallery: [
      { src: "/work/nova/01-progress.png", alt: "Weight progress with chart and journal" },
      { src: "/work/nova/02-podcast.jpg", alt: "Podcast library with daily pick" },
      { src: "/work/nova/03-podcast-details.jpg", alt: "Podcast detail with sessions and reviews" },
    ],
    sections: [
      {
        label: "(01) Context",
        heading: "A wellness brand for the long, quiet hours.",
        body: "Nova exists for the moments between workouts — the bedtime, the morning weigh-in, the slow journal entry. It needed to feel less like a tracker and more like a companion: warm, literary, never preachy.",
      },
      {
        label: "(02) Approach",
        heading: "Type as identity.",
        body: "The Podcast section opens with a calligraphic display setting that gives the otherwise utilitarian product a soul. Charts, cards, and tables borrow from editorial layouts — generous spacing, restrained colour, and a single accent of warm brown that ties the whole system together.",
      },
      {
        label: "(03) Outcome",
        heading: "One system, three surfaces.",
        body: "Progress tracking, podcast library, and case-detail screens all draw from the same components and tokens. The result is a small system that feels mature beyond its scope.",
      },
    ],
    tags: ["Mobile", "Wellness", "Branding", "Type", "Data Viz"],
  },
  {
    slug: "the-zenith",
    title: "The Zenith",
    client: "Self-initiated · 2025",
    role: "Restaurant · Web · UI",
    year: "2025",
    bg: "bg-[#e9e3d8]",
    aspect: "aspect-[9/19.5]",
    summary:
      "A fine-dining restaurant site where elegant typography meets a quietly curated menu — built for slow reading and a confident booking.",
    intro:
      "The Zenith is a brand and product exploration for a fine-dining restaurant. The system is built around a single italic wordmark and a generous, paper-coloured canvas — letting the food, the drinks, and the menu prices breathe without ornament.",
    images: [
      { src: "/work/zenith/01-home.png", alt: "The Zenith — home" },
      { src: "/work/zenith/02-menu.png", alt: "The Zenith — navigation menu" },
      { src: "/work/zenith/03-food-menu.png", alt: "The Zenith — food menu" },
    ],
    sections: [
      {
        label: "(01) Context",
        heading: "Elevated dining meets relaxed elegance.",
        body: "Most restaurant sites lead with photography or a noisy reservation widget. The Zenith leads with type — a confident italic mark, a single tagline, and two soft cards that signal the two halves of the experience: food and drinks.",
      },
      {
        label: "(02) Approach",
        heading: "Type as the maître d'.",
        body: "Italics for the wordmark, all-caps for the navigation, and a tabular menu rhythm with right-aligned prices that read like an old-school carte. The colour palette stays paper-cream and ink, so a glass of wine or a salmon dish can carry the colour itself.",
      },
      {
        label: "(03) Outcome",
        heading: "A small, opinionated system.",
        body: "Three screens carry the whole brand: a calm home, a full-screen navigation overlay, and a tabular menu page. Each surface uses the same type ramp, the same quiet card, and the same generous margins.",
      },
    ],
    tags: ["Restaurant", "Brand", "UI", "Type", "Menu Design"],
  },
  {
    slug: "cadence",
    title: "Cadence",
    client: "Self-initiated · 2025",
    role: "Mobile App · Onboarding · UI",
    year: "2025",
    bg: "bg-[#ede5d8]",
    aspect: "aspect-[9/19.5]",
    summary:
      "A fitness onboarding flow that turns a 12-step questionnaire into a calm, opinionated conversation.",
    intro:
      "Cadence is a fitness companion built around its onboarding. A 12-step flow asks just enough — gender, fitness level, intent — to personalise a programme without ever feeling clinical. The system trades datasheets for warm illustration and a single, confident type voice.",
    images: [
      { src: "/work/cadence/01-gender.jpg", alt: "Cadence — gender selection (step 8/12)" },
      { src: "/work/cadence/02-fitness.jpg", alt: "Cadence — fitness level (step 9/12)" },
      { src: "/work/cadence/03-success.jpg", alt: "Cadence — success screen" },
    ],
    sections: [
      {
        label: "(01) Context",
        heading: "Most onboardings feel like forms. This one shouldn't.",
        body: "Twelve questions is a lot to ask of a stranger. Cadence treats the flow like a conversation — one quiet question per screen, generous space, and a progress bar that explains itself without numbers when it can.",
      },
      {
        label: "(02) Approach",
        heading: "Illustration where photography would feel cold.",
        body: "Custom flat illustrations carry the personality of each step — yoga poses for fitness level, friendly avatars for gender, a script-set send-off for the success screen. The accent brown threads it all together: progress bars, primary buttons, and the warmest illustration cards.",
      },
      {
        label: "(03) Outcome",
        heading: "A finish line that feels earned.",
        body: "The closer screen flips the canvas to black with a single calligraphic line — \"You are ready to go!\" — making completion feel like a small ceremony. The result is an onboarding that users actually finish.",
      },
    ],
    tags: ["Mobile", "Onboarding", "UI", "Illustration", "Type"],
  },
];

export function getWork(slug: string) {
  return works.find((w) => w.slug === slug);
}
