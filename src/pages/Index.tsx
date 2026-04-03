import { useState } from "react";
import { motion } from "framer-motion";
import { MessageCircle, ChefHat, Sparkles, Star } from "lucide-react";
import FeaturedProductCard from "@/components/FeaturedProductCard";
import ProductCard from "@/components/ProductCard";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import { featuredProducts, catalogueProducts, categories } from "@/data/products";

const featuredHighlights = [
  {
    icon: ChefHat,
    title: "Fresh Daily",
    description: "Baked in small batches",
  },
  {
    icon: Sparkles,
    title: "Custom Flavors",
    description: "Pick your favorite taste",
  },
  {
    icon: MessageCircle,
    title: "Easy Ordering",
    description: "Send orders via WhatsApp",
  },
];

const Index = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProducts =
    activeCategory === "All"
      ? catalogueProducts
      : catalogueProducts.filter((p) => p.category === activeCategory);

  return (
    <div className="min-h-screen bg-background">
      {/* Floating WhatsApp */}
      <FloatingWhatsApp />

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/80 via-foreground/60 to-background" />
        <div className="relative bakery-container py-24 md:py-44 lg:py-52 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-5 py-2 mb-8">
              <ChefHat className="w-4 h-4 text-accent" />
              <span className="text-sm font-body font-semibold text-white/95 tracking-wide">
                Artisan Bakery
              </span>
            </div>
            <h1 className="font-heading text-4xl md:text-7xl lg:text-8xl font-extrabold text-white mb-5 leading-[1.1] drop-shadow-[0_4px_20px_rgba(0,0,0,0.4)]">
              Freshly Baked
              <br />
              <span className="text-accent drop-shadow-[0_2px_10px_rgba(194,139,50,0.4)]">Happiness</span>
            </h1>
            <p className="font-body text-base md:text-xl text-white/90 max-w-2xl mx-auto mb-10 leading-relaxed">
              Handcrafted pastries and desserts made with love, premium ingredients,
              and generations of baking tradition.
            </p>
            <motion.a
              href="https://wa.me/?text=Hi%2C%20I%20would%20like%20to%20place%20an%20order!"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2.5 bg-[#25D366] text-white font-body font-bold py-4 px-8 md:py-5 md:px-10 rounded-2xl text-base md:text-lg shadow-lg shadow-[#25D366]/30 transition-colors duration-300 hover:bg-[#1fb855] w-full sm:w-auto justify-center"
            >
              <MessageCircle className="w-5 h-5 md:w-6 md:h-6" />
              Order on WhatsApp
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="relative -mt-10 md:-mt-16 z-10 pb-16 md:pb-24">
        <div className="bakery-container">
          <div className="relative overflow-hidden rounded-[2rem] border border-primary/15 bg-card shadow-hero">
            <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/40 to-background" />
            <div
              className="absolute inset-0 opacity-[0.025]"
              style={{
                backgroundImage:
                  "radial-gradient(circle, hsl(352 59% 30%) 1px, transparent 1px)",
                backgroundSize: "24px 24px",
              }}
            />
            <div className="absolute -top-20 right-0 h-48 w-48 rounded-full bg-primary/10 blur-3xl" />
            <div className="absolute bottom-0 left-0 h-40 w-40 rounded-full bg-accent/10 blur-3xl" />

            <div className="relative px-5 py-12 md:px-8 md:py-16 lg:px-10">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center mb-10 md:mb-14"
              >
                <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-1.5 mb-4">
                  <Sparkles className="w-4 h-4 text-accent" />
                  <span className="text-sm font-body font-semibold text-primary uppercase tracking-widest">
                    Our Bestsellers
                  </span>
                  <Sparkles className="w-4 h-4 text-accent" />
                </div>
                <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground">
                  Featured Products
                </h2>
                <p className="text-muted-foreground font-body mt-3 max-w-2xl mx-auto text-sm md:text-base">
                  Our most loved treats, handpicked for you with richer flavors, custom sizes, and direct ordering.
                </p>
                <div className="w-20 h-1 bg-accent rounded-full mx-auto mt-5" />
              </motion.div>

              <div className="grid gap-3 sm:grid-cols-3 mb-8 md:mb-12">
                {featuredHighlights.map((item) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.title}
                      className="rounded-2xl border border-primary/10 bg-background/80 px-4 py-4 shadow-card backdrop-blur-sm"
                    >
                      <div className="flex items-start gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-card">
                          <Icon className="h-4 w-4" />
                        </div>
                        <div>
                          <p className="font-heading text-base font-bold text-foreground">
                            {item.title}
                          </p>
                          <p className="font-body text-sm text-muted-foreground">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="space-y-10 md:space-y-14">
                {featuredProducts.map((product, index) => (
                  <FeaturedProductCard key={product.id} product={product} index={index} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Catalogue */}
      <section className="relative pb-20 md:pb-32">
        <div className="absolute inset-x-0 top-16 h-64 bg-primary/5 blur-3xl" />
        <div className="bakery-container relative z-10">
          <div className="rounded-[2rem] border border-primary/10 bg-card/80 backdrop-blur-sm px-5 py-12 shadow-card md:px-10 md:py-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <span className="text-sm font-body font-semibold text-accent uppercase tracking-widest">
                Explore More
              </span>
              <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mt-2">
                Our Catalogue
              </h2>
              <div className="w-16 h-1 bg-accent rounded-full mx-auto mt-4" />
            </motion.div>

            {/* Category Filters */}
            <div className="flex flex-wrap justify-center gap-2 mb-12">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-5 py-2.5 rounded-xl text-sm font-body font-bold transition-all duration-300 border ${
                    activeCategory === category
                      ? "bg-primary text-primary-foreground border-primary shadow-md"
                      : "bg-background text-foreground border-border hover:border-primary/50 hover:bg-primary/5"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Product Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-7">
              {filteredProducts.map((product, index) => (
                <ProductCard key={product.id} product={product} index={index} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary py-14 md:py-20">
        <div className="bakery-container text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="font-heading text-2xl md:text-4xl font-bold text-primary-foreground mb-3">
              Ready to Order?
            </h3>
            <p className="font-body text-primary-foreground/80 mb-8 text-base md:text-lg max-w-md mx-auto">
              Send us a message on WhatsApp and we'll get your order ready!
            </p>
            <motion.a
              href="https://wa.me/?text=Hi%2C%20I%20would%20like%20to%20place%20an%20order!"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2.5 bg-[#25D366] text-white font-body font-bold py-3.5 px-8 rounded-2xl text-base md:text-lg shadow-lg shadow-[#25D366]/20 transition-colors duration-300 hover:bg-[#1fb855]"
            >
              <MessageCircle className="w-5 h-5" />
              Chat with Us
            </motion.a>
            <p className="text-primary-foreground/40 text-sm font-body mt-10">
              © 2026 Bakery. Made with ❤️
            </p>
          </motion.div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
