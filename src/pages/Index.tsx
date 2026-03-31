import { useState } from "react";
import { motion } from "framer-motion";
import { MessageCircle, ChefHat } from "lucide-react";
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
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/60 via-foreground/40 to-background" />
        <div className="relative bakery-container py-28 md:py-40 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 bg-primary/10 backdrop-blur-sm border border-primary/20 rounded-full px-4 py-1.5 mb-6">
              <ChefHat className="w-4 h-4 text-accent" />
              <span className="text-sm font-body font-medium text-primary-foreground/90">
                Artisan Bakery
              </span>
            </div>
            <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-4 leading-tight">
              Freshly Baked
              <br />
              <span className="text-accent">Happiness</span>
            </h1>
            <p className="font-body text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto mb-8 leading-relaxed">
              Handcrafted pastries and desserts made with love, premium ingredients,
              and generations of baking tradition.
            </p>
            <a
              href="https://wa.me/?text=Hi%2C%20I%20would%20like%20to%20place%20an%20order!"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1fb855] text-[#fff] font-body font-bold py-4 px-8 rounded-2xl text-lg transition-all duration-300 hover:shadow-hero hover:-translate-y-1"
            >
              <MessageCircle className="w-5 h-5" />
              Order on WhatsApp
            </a>
          </motion.div>
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
          <span className="text-sm font-body font-semibold text-accent uppercase tracking-widest">
            Our Bestsellers
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2">
            Featured Products
          </h2>
        </motion.div>

        <div className="space-y-8">
          {featuredProducts.map((product, index) => (
            <FeaturedProductCard key={product.id} product={product} index={index} />
          ))}
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
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2">
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
