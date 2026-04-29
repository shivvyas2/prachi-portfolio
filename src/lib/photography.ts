export type Photo = {
  src: string;
  alt: string;
  caption: string;
  /** Tailwind aspect class — controls the editorial grid rhythm. */
  aspect: string;
};

export const series = {
  title: "Building Archives",
  subtitle: "NYC · 2026",
  description:
    "An ongoing study of New York's cast-iron facades, classical ornament, and storefront geometry — shot on long walks through Soho, Tribeca, and the Flatiron district.",
  photos: [
    {
      src: "/photography/01-flatiron.jpg",
      alt: "Red Flatiron-style building rising into a clear sky",
      caption: "Fuller proportions",
      // Aspect chosen so col-span-7 row-1 matches the height of col-span-5 row-1.
      aspect: "aspect-[7/9]",
    },
    {
      src: "/photography/02-arches.jpg",
      alt: "Three stacked rows of arched windows on a Soho cast-iron facade",
      caption: "Three rows of arches",
      // Pairs with photo 01 — same row-1 height.
      aspect: "aspect-[5/9]",
    },
    {
      src: "/photography/04-cast-iron.jpg",
      alt: "Cast-iron Soho columns with rhythmic vertical mullions",
      caption: "Cast-iron rhythm",
      aspect: "aspect-[4/5]",
    },
    {
      src: "/photography/03-arched-facade.jpg",
      alt: "Classical arched facade with deep negative space",
      caption: "Arch · negative space",
      aspect: "aspect-[4/5]",
    },
    {
      src: "/photography/10-storefront-night.jpg",
      alt: "Warm-lit storefront entrance at night",
      caption: "Storefront after dark",
      aspect: "aspect-[4/5]",
    },
  ] satisfies Photo[],
};
