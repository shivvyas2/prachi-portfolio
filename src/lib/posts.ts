export type Post = {
  slug: string;
  title: string;
  date: string;
  category: string;
  src: string;
  excerpt: string;
};

export const posts: Post[] = [
  {
    slug: "one",
    title: "The power of simplicity in modern brand design",
    date: "November 11, 2025",
    category: "Brand",
    src: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=1600&q=80&auto=format&fit=crop",
    excerpt:
      "Reduction is hard. A short field guide to choosing the few right things — and committing.",
  },
  {
    slug: "two",
    title: "From idea to execution: building products that last",
    date: "October 1, 2025",
    category: "Product",
    src: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=1600&q=80&auto=format&fit=crop",
    excerpt:
      "How we sequence research, design, and engineering so that ambitious products actually ship.",
  },
  {
    slug: "three",
    title: "Why great brands are built on clarity, not complexity",
    date: "October 3, 2026",
    category: "Strategy",
    src: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1600&q=80&auto=format&fit=crop",
    excerpt:
      "Notes on positioning, voice, and the patience required to let a brand become legible.",
  },
  {
    slug: "four",
    title: "Designing digital systems that scale your business",
    date: "October 4, 2025",
    category: "Systems",
    src: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=1600&q=80&auto=format&fit=crop",
    excerpt:
      "Tokens, components, governance — and the human practices that make a system stick.",
  },
];

export function getPost(slug: string) {
  return posts.find((p) => p.slug === slug);
}
