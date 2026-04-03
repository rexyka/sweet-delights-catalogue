import { useState } from "react";
import { motion } from "framer-motion";
import { MessageCircle, ChefHat, Sparkles } from "lucide-react";
import FeaturedProductCard from "@/components/FeaturedProductCard";
import ProductCard from "@/components/ProductCard";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import { featuredProducts, catalogueProducts, categories } from "@/data/products";

const Index = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProducts =
    activeCategory === "All"
      ? catalogueProducts
      : catalogueProducts.filter((p) => p.category === activeCategory);

  return (
    <div className="min-h-screen bg-background">
      <FloatingWhatsApp />

      {/* ─── Hero ─── */}
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-background" />

        <div className="relative bakery-container flex flex-col items-center justify-center text-center py-28 md:py-48 lg:py-56">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-md px-4 py-1.5 mb-8">
              <ChefHat className="w-4 h-4 text-accent" />
              <span className="text-xs font-semibold tracking-widest uppercase text-white/90">
                Artisan Bakery
              </span>
            </div>

            <h1 className="font-display text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-[1.05] mb-5 text-balance">
              Freshly Baked{" "}
              <span className="italic text-accent">Happiness</span>
            </h1>

            <p className="text-white/80 text-base md:text-lg max-w-xl mx-auto mb-10 leading-relaxed">
              Handcrafted pastries &amp; desserts made with love, premium
              ingredients, and generations of baking tradition.
            </p>

            <motion.a
              href="https://wa.me/?text=Hi%2C%20I%20would%20like%20to%20place%20an%20order!"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2.5 rounded-full bg-accent px-7 py-3.5 md:px-9 md:py-4 text-sm md:text-base font-bold text-accent-foreground shadow-[0_8px_24px_-6px_hsl(38_72%_55%/0.45)] transition-colors duration-300 hover:bg-accent/90"
            >
              <MessageCircle className="w-5 h-5" />
              Order on WhatsApp
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* ─── Featured Products ─── */}
      <section className="relative -mt-14 md:-mt-20 z-10 pb-20 md:pb-28">
        <div className="bakery-container">
          {/* Section header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10 md:mb-14"
          >
            <div className="inline-flex items-center gap-2 mb-3">
              <Sparkles className="w-4 h-4 text-accent" />
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-accent">
                Our Bestsellers
              </span>
              <Sparkles className="w-4 h-4 text-accent" />
            </div>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">
              Featured Products
            </h2>
          </motion.div>

          {/* Cards */}
          <div className="space-y-8 md:space-y-12">
            {featuredProducts.map((product, index) => (
              <FeaturedProductCard key={product.id} product={product} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* ─── Catalogue ─── */}
      <section className="relative py-16 md:py-24">
        {/* Background accent */}
        <div className="absolute inset-0 bg-primary" />
        <div className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)",
            backgroundSize: "20px 20px",
          }}
        />

        <div className="bakery-container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10 md:mb-14"
          >
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-accent">
              Explore More
            </span>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-primary-foreground mt-2">
              Our Catalogue
            </h2>
          </motion.div>

          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-2 mb-10 md:mb-14">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-xs md:text-sm font-semibold transition-all duration-300 border ${
                  activeCategory === category
                    ? "bg-accent text-accent-foreground border-accent"
                    : "bg-transparent text-primary-foreground/80 border-primary-foreground/20 hover:border-primary-foreground/40 hover:text-primary-foreground"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {filteredProducts.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* ─── Footer ─── */}
      <footer className="bg-foreground py-16 md:py-20">
        <div className="bakery-container text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="font-display text-2xl md:text-4xl font-bold text-white mb-3">
              Ready to Order?
            </h3>
            <p className="text-white/60 mb-8 max-w-md mx-auto">
              Send us a message on WhatsApp and we'll get your order ready!
            </p>
            <motion.a
              href="https://wa.me/?text=Hi%2C%20I%20would%20like%20to%20place%20an%20order!"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2.5 rounded-full bg-accent px-8 py-3.5 text-sm md:text-base font-bold text-accent-foreground shadow-[0_4px_20px_-4px_hsl(38_72%_55%/0.35)] transition-colors duration-300 hover:bg-accent/90"
            >
              <MessageCircle className="w-5 h-5" />
              Chat with Us
            </motion.a>
            <p className="text-white/30 text-xs mt-10">
              © 2026 Bakery. Made with ❤️
            </p>
          </motion.div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
