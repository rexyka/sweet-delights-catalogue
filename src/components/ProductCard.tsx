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
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: index * 0.07 }}
      className="group relative"
    >
      <div className="relative overflow-hidden rounded-2xl bg-white shadow-[0_2px_16px_-4px_rgba(0,0,0,0.08)] transition-all duration-500 hover:shadow-[0_12px_40px_-8px_rgba(0,0,0,0.15)] hover:-translate-y-1.5">
        {/* Image */}
        <div className="relative aspect-[4/3] overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
          <div className="absolute bottom-3 left-3">
            <span className="inline-block rounded-full bg-white/90 backdrop-blur-sm px-3 py-1 text-[10px] md:text-xs font-semibold text-foreground uppercase tracking-wider">
              {product.category}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-4 md:p-5">
          <h3 className="font-display text-base md:text-lg font-semibold text-foreground leading-snug mb-1">
            {product.name}
          </h3>
          <p className="text-muted-foreground text-xs md:text-sm leading-relaxed mb-3 line-clamp-2 hidden md:block">
            {product.description}
          </p>
          <div className="flex items-center justify-between gap-2">
            <span className="font-display text-lg md:text-xl font-bold text-primary">
              {formatPrice(product.price)}
            </span>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full bg-primary px-3.5 py-2 md:px-4 md:py-2 text-xs md:text-sm font-semibold text-primary-foreground transition-all duration-300 hover:bg-primary/85 active:scale-95"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Order</span>
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
