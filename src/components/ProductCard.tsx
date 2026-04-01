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
      className="group bg-card rounded-2xl shadow-card overflow-hidden hover:shadow-card-hover transition-all duration-500 hover:-translate-y-1"
    >
      <div className="relative overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>

      <div className="p-5">
        <span className="text-xs font-body font-semibold text-muted-foreground uppercase tracking-wider">
          {product.category}
        </span>
        <h3 className="font-heading text-lg font-bold text-foreground mt-1 mb-2">
          {product.name}
        </h3>
        <p className="text-muted-foreground text-sm font-body mb-4 line-clamp-2 leading-relaxed">
          {product.description}
        </p>
        <div className="flex items-center justify-between">
          <span className="font-heading text-xl font-bold text-primary">
            {formatPrice(product.price)}
          </span>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 bg-[#25D366] hover:bg-[#1fb855] text-[#fff] font-body text-sm font-semibold py-2 px-4 rounded-xl transition-all duration-300 hover:shadow-md"
          >
            <MessageCircle className="w-4 h-4" />
            Order
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
