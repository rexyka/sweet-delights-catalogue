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
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group bg-card rounded-2xl shadow-card overflow-hidden hover:shadow-card-hover transition-all duration-500 hover:-translate-y-1 border border-primary/10"
    >
      <div className="relative overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="w-full h-36 md:h-48 object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>

      <div className="p-3 md:p-5">
        <span className="text-[10px] md:text-xs font-body font-semibold text-primary uppercase tracking-wider">
          {product.category}
        </span>
        <h3 className="font-heading text-sm md:text-lg font-bold text-foreground mt-1 mb-1 md:mb-2">
          {product.name}
        </h3>
        <p className="text-muted-foreground text-xs md:text-sm font-body mb-3 line-clamp-2 leading-relaxed hidden md:block">
          {product.description}
        </p>
        <div className="flex items-center justify-between">
          <span className="font-heading text-base md:text-xl font-bold text-primary">
            {formatPrice(product.price)}
          </span>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 md:gap-1.5 bg-[#25D366] hover:bg-[#1fb855] text-[#fff] font-body text-xs md:text-sm font-semibold py-1.5 md:py-2 px-3 md:px-4 rounded-xl transition-all duration-300 hover:shadow-md"
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
