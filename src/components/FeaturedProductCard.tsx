import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, Star } from "lucide-react";
import { Product, formatPrice, buildWhatsAppUrl } from "@/data/products";

interface FeaturedProductCardProps {
  product: Product;
  index: number;
}

const FeaturedProductCard = ({ product, index }: FeaturedProductCardProps) => {
  const [selectedSize, setSelectedSize] = useState(product.sizes?.[0] || "");
  const [selectedFlavor, setSelectedFlavor] = useState(product.flavors?.[0] || "");

  const whatsappUrl = buildWhatsAppUrl(product.name, selectedSize, selectedFlavor);

  const currentImage =
    selectedFlavor && product.flavorImages?.[selectedFlavor]
      ? product.flavorImages[selectedFlavor]
      : product.image;

  const isReversed = index % 2 === 1;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, delay: index * 0.1 }}
    >
      <div className="overflow-hidden rounded-3xl bg-white shadow-[0_8px_40px_-12px_rgba(0,0,0,0.12)] transition-shadow duration-500 hover:shadow-[0_16px_56px_-16px_rgba(0,0,0,0.18)]">
        <div className={`md:flex ${isReversed ? "md:flex-row-reverse" : ""}`}>
          {/* Image */}
          <div className="md:w-[55%] relative overflow-hidden bg-muted">
            <AnimatePresence mode="wait">
              <motion.img
                key={currentImage}
                src={currentImage}
                alt={`${product.name} - ${selectedFlavor}`}
                loading={index === 0 ? undefined : "lazy"}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.4 }}
                className="w-full h-64 md:h-[480px] object-cover"
              />
            </AnimatePresence>
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

            {/* Bestseller badge */}
            <div className="absolute top-4 left-4 flex items-center gap-1.5 rounded-full bg-accent px-3 py-1.5 shadow-lg">
              <Star className="w-3.5 h-3.5 text-accent-foreground fill-accent-foreground" />
              <span className="text-accent-foreground text-xs font-bold uppercase tracking-wide">
                Bestseller
              </span>
            </div>

            {/* Flavor dots */}
            {product.flavors && (
              <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
                {product.flavors.map((flavor) => (
                  <button
                    key={flavor}
                    onClick={() => setSelectedFlavor(flavor)}
                    className={`h-3 w-3 rounded-full border-2 transition-all duration-300 ${
                      selectedFlavor === flavor
                        ? "bg-white border-white scale-125 shadow-md"
                        : "bg-white/40 border-white/50 hover:bg-white/70"
                    }`}
                    aria-label={`Select ${flavor}`}
                  />
                ))}
              </div>
            )}
          </div>

          {/* Content */}
          <div className="md:w-[45%] p-6 md:p-10 lg:p-12 flex flex-col justify-center">
            <div className="w-10 h-0.5 bg-accent mb-5" />

            <h3 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-2 leading-tight">
              {product.name}
            </h3>
            <p className="text-muted-foreground text-sm md:text-base mb-5 leading-relaxed">
              {product.description}
            </p>

            <div className="flex items-baseline gap-2 mb-6">
              <span className="text-muted-foreground text-xs uppercase tracking-wider">
                {product.priceLabel}
              </span>
              <span className="font-display text-2xl md:text-3xl font-bold text-primary">
                {formatPrice(product.price)}
              </span>
            </div>

            {/* Size */}
            {product.sizes && (
              <div className="mb-5">
                <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2.5">
                  Size
                </p>
                <div className="flex flex-wrap gap-2">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 border ${
                        selectedSize === size
                          ? "bg-primary text-primary-foreground border-primary"
                          : "bg-transparent text-foreground border-border hover:border-primary/40"
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Flavor */}
            {product.flavors && (
              <div className="mb-7">
                <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2.5">
                  Flavor
                </p>
                <div className="flex flex-wrap gap-2">
                  {product.flavors.map((flavor) => (
                    <button
                      key={flavor}
                      onClick={() => setSelectedFlavor(flavor)}
                      className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 border ${
                        selectedFlavor === flavor
                          ? "bg-primary text-primary-foreground border-primary"
                          : "bg-transparent text-foreground border-border hover:border-primary/40"
                      }`}
                    >
                      {flavor}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* CTA */}
            <motion.a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center justify-center gap-2.5 rounded-full bg-primary px-6 py-3.5 text-sm md:text-base font-bold text-primary-foreground shadow-[0_4px_16px_-2px_hsl(350_55%_25%/0.35)] transition-colors duration-300 hover:bg-primary/90 w-full"
            >
              <MessageCircle className="w-5 h-5" />
              Order via WhatsApp
            </motion.a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default FeaturedProductCard;
