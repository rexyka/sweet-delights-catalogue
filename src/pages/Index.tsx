import { useState } from "react";
import { motion } from "framer-motion";
import { MessageCircle, ChefHat, Sparkles, Star } from "lucide-react";
import FeaturedProductCard from "@/components/FeaturedProductCard";
import ProductCard from "@/components/ProductCard";
import { featuredProducts, catalogueProducts, categories } from "@/data/products";

const Index = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProducts =
    activeCategory === "All"
      ? catalogueProducts
      : catalogueProducts.filter((p) => p.category === activeCategory);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-primary">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/60 to-primary" />
        <div className="relative bakery-container py-20 md:py-40 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 mb-6">
              <ChefHat className="w-4 h-4 text-accent" />
              <span className="text-sm font-body font-medium text-white/90">
                Artisan Bakery
              </span>
            </div>
            <h1 className="font-heading text-3xl md:text-6xl lg:text-7xl font-bold text-white mb-4 leading-tight drop-shadow-lg">
              Freshly Baked
              <br />
              <span className="text-accent">Happiness</span>
            </h1>
            <p className="font-body text-base md:text-xl text-white/85 max-w-2xl mx-auto mb-8 leading-relaxed">
              Handcrafted pastries and desserts made with love, premium ingredients,
              and generations of baking tradition.
            </p>
            <a
              href="https://wa.me/?text=Hi%2C%20I%20would%20like%20to%20place%20an%20order!"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1fb855] text-[#fff] font-body font-bold py-3.5 px-6 md:py-4 md:px-8 rounded-2xl text-base md:text-lg transition-all duration-300 hover:shadow-hero hover:-translate-y-1 w-full sm:w-auto justify-center"
            >
              <MessageCircle className="w-5 h-5" />
              Order on WhatsApp
            </a>
          </motion.div>
        </div>
        {/* Wave divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 80L60 68C120 56 240 32 360 24C480 16 600 24 720 36C840 48 960 64 1080 64C1200 64 1320 48 1380 40L1440 32V80H0Z" fill="hsl(39, 100%, 94%)" />
          </svg>
        </div>
      </section>

      {/* Featured Products */}
      <section className="bakery-container py-16 md:py-24">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 mb-3">
            <Sparkles className="w-4 h-4 text-accent" />
            <span className="text-sm font-body font-semibold text-accent uppercase tracking-widest">
              Our Bestsellers
            </span>
            <Sparkles className="w-4 h-4 text-accent" />
          </div>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-2">
            Featured Products
          </h2>
          <p className="text-muted-foreground font-body mt-3 max-w-lg mx-auto">
            Our most loved treats, handpicked for you. Choose your size and flavor!
          </p>
        </motion.div>

        <div className="space-y-8">
          {featuredProducts.map((product, index) => (
            <FeaturedProductCard key={product.id} product={product} index={index} />
          ))}
        </div>
      </section>

      {/* Maroon divider band */}
      <section className="bg-primary py-12 md:py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-4 left-[10%] w-20 h-20 rounded-full border-2 border-white/30" />
          <div className="absolute bottom-4 right-[15%] w-32 h-32 rounded-full border-2 border-white/20" />
          <div className="absolute top-1/2 left-[50%] w-16 h-16 rounded-full border border-white/20" />
        </div>
        <div className="bakery-container text-center relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
            <div className="flex flex-col items-center">
              <Star className="w-6 h-6 text-accent mb-2" />
              <span className="font-heading text-2xl md:text-3xl font-bold text-white">100+</span>
              <span className="text-white/70 font-body text-sm mt-1">Happy Customers</span>
            </div>
            <div className="w-px h-12 bg-white/20 hidden md:block" />
            <div className="flex flex-col items-center">
              <ChefHat className="w-6 h-6 text-accent mb-2" />
              <span className="font-heading text-2xl md:text-3xl font-bold text-white">Fresh Daily</span>
              <span className="text-white/70 font-body text-sm mt-1">Baked Every Morning</span>
            </div>
            <div className="w-px h-12 bg-white/20 hidden md:block" />
            <div className="flex flex-col items-center">
              <MessageCircle className="w-6 h-6 text-accent mb-2" />
              <span className="font-heading text-2xl md:text-3xl font-bold text-white">Easy Order</span>
              <span className="text-white/70 font-body text-sm mt-1">Via WhatsApp</span>
            </div>
          </div>
        </div>
      </section>

      {/* Catalogue */}
      <section className="bg-secondary/50 py-16 md:py-24">
        <div className="bakery-container">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10"
          >
            <span className="text-sm font-body font-semibold text-accent uppercase tracking-widest">
              Explore More
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-2">
              Our Catalogue
            </h2>
          </motion.div>

          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2 rounded-xl text-sm font-body font-semibold transition-all duration-200 border ${
                  activeCategory === category
                    ? "bg-primary text-primary-foreground border-primary"
                    : "bg-card text-foreground border-border hover:border-primary/50"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6">
            {filteredProducts.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary py-10">
        <div className="bakery-container text-center">
          <h3 className="font-display text-2xl font-bold text-primary-foreground mb-2">
            Ready to Order?
          </h3>
          <p className="font-body text-primary-foreground/80 mb-6">
            Send us a message on WhatsApp and we'll get your order ready!
          </p>
          <a
            href="https://wa.me/?text=Hi%2C%20I%20would%20like%20to%20place%20an%20order!"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1fb855] text-[#fff] font-body font-bold py-3 px-6 rounded-xl transition-all duration-300 hover:shadow-lg"
          >
            <MessageCircle className="w-5 h-5" />
            Chat with Us
          </a>
          <p className="text-primary-foreground/50 text-sm font-body mt-8">
            © 2026 Bakery. Made with ❤️
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
