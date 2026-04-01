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
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="relative"
    >
      {/* Decorative background blob */}
      <div className="absolute -inset-4 bg-primary/5 rounded-[2rem] -z-10 hidden md:block" />

      <div className={`bg-card rounded-2xl shadow-card overflow-hidden hover:shadow-card-hover transition-all duration-500 border border-primary/15`}>
        <div className={`md:flex ${isReversed ? "md:flex-row-reverse" : ""}`}>
          {/* Image side */}
          <div className="md:w-1/2 relative overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.img
                key={currentImage}
                src={currentImage}
                alt={`${product.name} - ${selectedFlavor}`}
                loading={index === 0 ? undefined : "lazy"}
                initial={{ opacity: 0, scale: 1.08 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="w-full h-72 md:h-[420px] object-cover"
              />
            </AnimatePresence>
            {/* Gradient overlay on image */}
            <div className="absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent to-transparent" />
            {/* Featured badge */}
            <div className="absolute top-4 left-4 bg-primary px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-lg">
              <Star className="w-3 h-3 text-accent fill-accent" />
              <span className="text-primary-foreground text-xs font-semibold font-body tracking-wide uppercase">
                Bestseller
              </span>
            </div>
            {/* Flavor preview dots on image */}
            {product.flavors && (
              <div className="absolute bottom-4 left-4 right-4 flex justify-center gap-1.5">
                {product.flavors.map((flavor) => (
                  <button
                    key={flavor}
                    onClick={() => setSelectedFlavor(flavor)}
                    className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                      selectedFlavor === flavor
                        ? "bg-accent scale-125 ring-2 ring-white shadow-md"
                        : "bg-white/60 hover:bg-white/90"
                    }`}
                    aria-label={`Select ${flavor}`}
                  />
                ))}
              </div>
            )}
          </div>

          {/* Content side */}
          <div className="md:w-1/2 p-5 md:p-8 lg:p-10 flex flex-col justify-center relative">
            {/* Decorative accent line */}
            <div className="w-12 h-1 bg-accent rounded-full mb-4" />

            <h3 className="font-heading text-xl md:text-3xl lg:text-4xl font-bold text-foreground mb-3">
              {product.name}
            </h3>
            <p className="text-muted-foreground font-body text-sm md:text-base mb-4 leading-relaxed">
              {product.description}
            </p>

            <div className="flex items-baseline gap-2 mb-6">
              <span className="text-muted-foreground text-xs font-body">{product.priceLabel}</span>
              <span className="font-heading text-2xl md:text-3xl font-bold text-primary">
                {formatPrice(product.price)}
              </span>
            </div>

            {/* Size Selection */}
            {product.sizes && (
              <div className="mb-4">
                <p className="text-sm font-semibold font-body text-foreground mb-2.5">📦 Choose Size</p>
                <div className="flex flex-wrap gap-2">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`px-3 md:px-4 py-2 rounded-xl text-xs md:text-sm font-body font-medium transition-all duration-200 border ${
                        selectedSize === size
                          ? "bg-primary text-primary-foreground border-primary shadow-md scale-105"
                          : "bg-background text-foreground border-border hover:border-primary/50 hover:bg-primary/5"
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Flavor Selection */}
            {product.flavors && (
              <div className="mb-6">
                <p className="text-sm font-semibold font-body text-foreground mb-2.5">🍰 Choose Flavor</p>
                <div className="flex flex-wrap gap-2">
                  {product.flavors.map((flavor) => (
                    <button
                      key={flavor}
                      onClick={() => setSelectedFlavor(flavor)}
                      className={`px-3 md:px-4 py-2 rounded-xl text-xs md:text-sm font-body font-medium transition-all duration-200 border ${
                        selectedFlavor === flavor
                          ? "bg-primary text-primary-foreground border-primary shadow-md scale-105"
                          : "bg-background text-foreground border-border hover:border-primary/50 hover:bg-primary/5"
                      }`}
                    >
                      {flavor}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* WhatsApp CTA */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1fb855] text-[#fff] font-body font-bold py-3.5 px-6 rounded-2xl transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 w-full text-base"
            >
              <MessageCircle className="w-5 h-5" />
              Order via WhatsApp
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default FeaturedProductCard;
