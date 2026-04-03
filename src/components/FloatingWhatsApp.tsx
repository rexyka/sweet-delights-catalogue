import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

const FloatingWhatsApp = () => (
  <motion.a
    href="https://wa.me/?text=Hi%2C%20I%20would%20like%20to%20place%20an%20order!"
    target="_blank"
    rel="noopener noreferrer"
    initial={{ scale: 0, opacity: 0 }}
    animate={{ scale: 1, opacity: 1 }}
    transition={{ delay: 1.2, type: "spring", stiffness: 180, damping: 12 }}
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}
    className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_4px_20px_rgba(37,211,102,0.4)] md:h-16 md:w-16"
    aria-label="Order on WhatsApp"
  >
    <MessageCircle className="h-6 w-6 md:h-7 md:w-7" />
    <span className="absolute -top-1 -right-1 flex h-5 w-5">
      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#25D366] opacity-50" />
      <span className="relative inline-flex h-5 w-5 rounded-full bg-[#25D366]" />
    </span>
  </motion.a>
);

export default FloatingWhatsApp;
