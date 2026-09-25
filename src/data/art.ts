export type ArtPiece = {
  id: string;
  title: string;
  artist: string;
  tradition: string;
  year: string;
  price: number;
  medium: string;
  image: string;
  blurb: string;
};

export const ART_PIECES: ArtPiece[] = [
  {
    id: "madhubani-peacock",
    title: "Peacock of Mithila",
    artist: "Radha Kumari",
    tradition: "Madhubani · Bihar",
    year: "2024",
    price: 85000,
    medium: "Natural pigment on handmade paper",
    image: "/art/madhubani-peacock.png",
    blurb:
      "A Kohbar-style peacock ringed with lotus, fish, and vine. Kumari paints the way her grandmother taught her: double lines first, then the fill.",
  },
  {
    id: "warli-harvest",
    title: "Tarpa Circle",
    artist: "Tukaram Bhoye",
    tradition: "Warli · Maharashtra",
    year: "2025",
    price: 62000,
    medium: "Rice paste on cow-dung ground",
    image: "/art/warli-harvest.png",
    blurb:
      "The harvest dance around the tarpa. Bhoye works on a mud ground so the white figures sit the way they do on a village wall.",
  },
  {
    id: "pichwai-lotus",
    title: "Lotus of Nathdwara",
    artist: "Anjali Rathore",
    tradition: "Pichwai · Rajasthan",
    year: "2024",
    price: 145000,
    medium: "Stone color and gold on cloth",
    image: "/art/pichwai-lotus.png",
    blurb:
      "A temple cloth for the monsoon: lotuses, cows, and a gold border. Rathore treats the pond as a shrine, not a landscape.",
  },
  {
    id: "kerala-mural",
    title: "Lamp Light, Padmanabhapuram",
    artist: "Lakshmi Menon",
    tradition: "Kerala mural · Kerala",
    year: "2025",
    price: 128000,
    medium: "Mineral pigment on prepared cloth",
    image: "/art/kerala-mural.png",
    blurb:
      "A temple mural brought onto cloth: lamp-black line, laterite red, and the long eye of the Kerala school.",
  },
  {
    id: "gond-forest",
    title: "Spotted Forest",
    artist: "Durga Maravi",
    tradition: "Gond · Madhya Pradesh",
    year: "2026",
    price: 98000,
    medium: "Acrylic on canvas",
    image: "/art/gond-forest.png",
    blurb:
      "A deer and a tree of life, filled with the fine dots and dashes of the Gond line. Maravi says the pattern is how the forest breathes.",
  },
  {
    id: "pattachitra-sea",
    title: "Sun over the Mahanadi",
    artist: "Nilakantha Mohapatra",
    tradition: "Pattachitra · Odisha",
    year: "2025",
    price: 110000,
    medium: "Natural color on tussar cloth",
    image: "/art/pattachitra-sea.png",
    blurb:
      "A Puri workshop sea: a boat, a wheel of a sun, and the red-and-yellow border used for festival cloths.",
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
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(price);
}
