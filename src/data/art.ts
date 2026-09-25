export type ArtPiece = {
  id: string;
  title: string;
  artist: string;
  year: string;
  price: number;
  medium: string;
  image: string;
  blurb: string;
};

export const ART_PIECES: ArtPiece[] = [
  {
    id: "midnight-tide",
    title: "Midnight Tide",
    artist: "Lina Voss",
    year: "2024",
    price: 2400,
    medium: "Oil on linen",
    image: "/art/midnight-tide.svg",
    blurb: "A slow swell of indigo and silver, painted from memory of a harbor after closing time.",
  },
  {
    id: "saffron-field",
    title: "Saffron Field",
    artist: "Kenji Morita",
    year: "2025",
    price: 1800,
    medium: "Acrylic on canvas",
    image: "/art/saffron-field.svg",
    blurb: "Heat, dust, and a single horizon line. The field is imagined; the light is not.",
  },
  {
    id: "quiet-lattice",
    title: "Quiet Lattice",
    artist: "Amara Cole",
    year: "2023",
    price: 3200,
    medium: "Ink and gouache",
    image: "/art/quiet-lattice.svg",
    blurb: "A grid that refuses to stay still. Cole draws until the paper starts answering back.",
  },
  {
    id: "ember-study",
    title: "Ember Study",
    artist: "Rafael Nunez",
    year: "2025",
    price: 2100,
    medium: "Charcoal and pastel",
    image: "/art/ember-study.svg",
    blurb: "The last heat in a kiln. Nunez works from a single photograph taken at 2 a.m.",
  },
  {
    id: "pale-harbor",
    title: "Pale Harbor",
    artist: "Sofia Berg",
    year: "2024",
    price: 2750,
    medium: "Watercolor on paper",
    image: "/art/pale-harbor.svg",
    blurb: "Fog, timber, and a boat that may or may not still be there. Berg never names the town.",
  },
  {
    id: "copper-hour",
    title: "Copper Hour",
    artist: "Ibrahim Kane",
    year: "2026",
    price: 4800,
    medium: "Mixed media on panel",
    image: "/art/copper-hour.svg",
    blurb: "Late sun on metal roofs. Kane builds the surface in layers of foil, resin, and earth pigment.",
  },
];

export function getPiece(id: string) {
  return ART_PIECES.find((piece) => piece.id === id);
}

export function getNeighbors(id: string) {
  const index = ART_PIECES.findIndex((piece) => piece.id === id);
  if (index < 0) {
    return { prev: null, next: null };
  }
  return {
    prev: ART_PIECES[(index - 1 + ART_PIECES.length) % ART_PIECES.length],
    next: ART_PIECES[(index + 1) % ART_PIECES.length],
  };
}

export function formatPrice(price: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(price);
}
