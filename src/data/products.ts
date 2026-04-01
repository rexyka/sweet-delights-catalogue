export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  priceLabel?: string;
  category: string;
  image: string;
  isFeatured?: boolean;
  sizes?: string[];
  flavors?: string[];
  flavorImages?: Record<string, string>;
}

export const products: Product[] = [
  {
    id: "sus",
    name: "Sus (Cream Puffs)",
    description: "Light, airy choux pastry filled with rich, velvety cream. Our signature treat that melts in your mouth.",
    price: 25000,
    priceLabel: "Starting from",
    category: "Pastries",
    image: "/images/sus.jpg",
    isFeatured: true,
    sizes: ["Small (6pcs)", "Medium (12pcs)", "Large (24pcs)"],
    flavors: ["Chocolate", "Vanilla", "Strawberry", "Matcha", "Caramel"],
    flavorImages: {
      Chocolate: "/images/sus-chocolate.jpg",
      Vanilla: "/images/sus-vanilla.jpg",
      Strawberry: "/images/sus-strawberry.jpg",
      Matcha: "/images/sus-matcha.jpg",
      Caramel: "/images/sus-caramel.jpg",
    },
  },
  {
    id: "pudding",
    name: "Pudding",
    description: "Silky smooth pudding made with premium ingredients. The perfect dessert for any occasion.",
    price: 30000,
    priceLabel: "Starting from",
    category: "Desserts",
    image: "/images/pudding.jpg",
    isFeatured: true,
    sizes: ["Small", "Medium", "Large"],
    flavors: ["Chocolate", "Vanilla", "Mango", "Strawberry", "Taro"],
    flavorImages: {
      Chocolate: "/images/pudding-chocolate.jpg",
      Vanilla: "/images/pudding-vanilla.jpg",
      Mango: "/images/pudding-mango.jpg",
      Strawberry: "/images/pudding-strawberry.jpg",
      Taro: "/images/pudding-taro.jpg",
    },
  },
  {
    id: "brownies",
    name: "Fudgy Brownies",
    description: "Rich, decadent chocolate brownies with a perfect fudgy center.",
    price: 35000,
    category: "Cakes",
    image: "/images/brownies.jpg",
  },
  {
    id: "cookies",
    name: "Butter Cookies",
    description: "Classic buttery cookies baked to golden perfection.",
    price: 20000,
    category: "Pastries",
    image: "/images/cookies.jpg",
  },
  {
    id: "cheesecake",
    name: "Cheesecake",
    description: "Creamy New York style cheesecake with a graham cracker crust.",
    price: 85000,
    category: "Cakes",
    image: "/images/cheesecake.jpg",
  },
  {
    id: "croissant",
    name: "Croissant",
    description: "Flaky, buttery French croissants, freshly baked every morning.",
    price: 15000,
    category: "Pastries",
    image: "/images/croissant.jpg",
  },
  {
    id: "tiramisu",
    name: "Tiramisu",
    description: "Classic Italian dessert with layers of coffee-soaked ladyfingers and mascarpone cream.",
    price: 75000,
    category: "Desserts",
    image: "/images/tiramisu.jpg",
  },
  {
    id: "muffins",
    name: "Blueberry Muffins",
    description: "Soft, fluffy muffins bursting with fresh blueberries.",
    price: 18000,
    category: "Pastries",
    image: "/images/muffins.jpg",
  },
];

export const categories = ["All", ...Array.from(new Set(products.filter(p => !p.isFeatured).map(p => p.category)))];

export const featuredProducts = products.filter(p => p.isFeatured);
export const catalogueProducts = products.filter(p => !p.isFeatured);

export function formatPrice(price: number): string {
  return new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR", minimumFractionDigits: 0 }).format(price);
}

export function buildWhatsAppUrl(product: string, size?: string, flavor?: string): string {
  let message = `Hi, I want to order:\n\nProduct: ${product}`;
  if (size) message += `\nSize: ${size}`;
  if (flavor) message += `\nFlavor: ${flavor}`;
  message += `\n\nPlease let me know the total and availability. Thank you!`;
  return `https://wa.me/?text=${encodeURIComponent(message)}`;
}
