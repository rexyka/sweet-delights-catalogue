import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { Product, formatPrice, buildWhatsAppUrl } from "@/data/products";

interface ProductCardProps {
  product: Product;
  index: number;
}

const ProductCard = ({ product, index }: ProductCardProps) => {
  const whatsappUrl = buildWhatsAppUrl(product.name);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="group relative bg-card rounded-2xl shadow-card overflow-hidden border border-primary/10 transition-all duration-500 hover:shadow-card-hover hover:-translate-y-2 hover:border-primary/25"
    >
      {/* Image */}
      <div className="relative overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="w-full h-40 md:h-52 object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        {/* Category pill on image */}
        <span className="absolute top-3 left-3 bg-primary/90 backdrop-blur-sm text-primary-foreground text-[10px] md:text-xs font-body font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full">
          {product.category}
        </span>
      </div>

      {/* Content */}
      <div className="p-4 md:p-5">
        <h3 className="font-heading text-sm md:text-lg font-bold text-foreground mb-1 md:mb-1.5 leading-snug">
          {product.name}
        </h3>
        <p className="text-muted-foreground text-xs md:text-sm font-body mb-3 md:mb-4 line-clamp-2 leading-relaxed hidden md:block">
          {product.description}
        </p>
        <div className="flex items-center justify-between gap-2">
          <span className="font-heading text-base md:text-xl font-bold text-primary">
            {formatPrice(product.price)}
          </span>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 md:gap-1.5 bg-[#25D366] hover:bg-[#1fb855] text-white font-body text-xs md:text-sm font-bold py-2 md:py-2.5 px-3.5 md:px-5 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-[#25D366]/25 active:scale-95"
          >
            <MessageCircle className="w-3.5 h-3.5 md:w-4 md:h-4" />
            Order
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
