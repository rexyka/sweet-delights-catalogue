import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle } from "lucide-react";
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

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="bg-card rounded-2xl shadow-card overflow-hidden hover:shadow-card-hover transition-shadow duration-500"
    >
      <div className="md:flex">
        {/* Image */}
        <div className="md:w-2/5 relative overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.img
              key={currentImage}
              src={currentImage}
              alt={`${product.name} - ${selectedFlavor}`}
              loading={index === 0 ? undefined : "lazy"}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4 }}
              className="w-full h-64 md:h-full object-cover"
            />
          </AnimatePresence>
          <div className="absolute top-4 left-4 bg-primary px-3 py-1 rounded-full">
            <span className="text-primary-foreground text-xs font-semibold font-body tracking-wide uppercase">
              Featured
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="md:w-3/5 p-6 md:p-8 flex flex-col justify-between">
          <div>
            <h3 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-2">
              {product.name}
            </h3>
            <p className="text-muted-foreground font-body mb-4 leading-relaxed">
              {product.description}
            </p>
            <p className="text-muted-foreground text-sm font-body mb-1">
              {product.priceLabel}
            </p>
            <p className="font-heading text-2xl font-bold text-primary mb-6">
              {formatPrice(product.price)}
            </p>

            {/* Size Selection */}
            {product.sizes && (
              <div className="mb-5">
                <p className="text-sm font-semibold font-body text-foreground mb-2">Size</p>
                <div className="flex flex-wrap gap-2">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`px-4 py-2 rounded-xl text-sm font-body font-medium transition-all duration-200 border ${
                        selectedSize === size
                          ? "bg-primary text-primary-foreground border-primary shadow-md"
                          : "bg-background text-foreground border-border hover:border-primary/50"
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
                <p className="text-sm font-semibold font-body text-foreground mb-2">Flavor</p>
                <div className="flex flex-wrap gap-2">
                  {product.flavors.map((flavor) => (
                    <button
                      key={flavor}
                      onClick={() => setSelectedFlavor(flavor)}
                      className={`px-4 py-2 rounded-xl text-sm font-body font-medium transition-all duration-200 border ${
                        selectedFlavor === flavor
                          ? "bg-primary text-primary-foreground border-primary shadow-md"
                          : "bg-background text-foreground border-border hover:border-primary/50"
                      }`}
                    >
                      {flavor}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* WhatsApp CTA */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1fb855] text-[#fff] font-body font-semibold py-3 px-6 rounded-xl transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 w-full md:w-auto"
          >
            <MessageCircle className="w-5 h-5" />
            Order via WhatsApp
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default FeaturedProductCard;
