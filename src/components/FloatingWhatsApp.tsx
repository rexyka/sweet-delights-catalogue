import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

const FloatingWhatsApp = () => (
  <motion.a
    href="https://wa.me/?text=Hi%2C%20I%20would%20like%20to%20place%20an%20order!"
    target="_blank"
    rel="noopener noreferrer"
    initial={{ scale: 0, opacity: 0 }}
    animate={{ scale: 1, opacity: 1 }}
    transition={{ delay: 1, type: "spring", stiffness: 200 }}
    className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-[#25D366]/30 transition-transform duration-300 hover:scale-110 hover:shadow-xl hover:shadow-[#25D366]/40 active:scale-95 md:h-16 md:w-16"
    aria-label="Order on WhatsApp"
  >
    <MessageCircle className="h-6 w-6 md:h-7 md:w-7" />
  </motion.a>
);

export default FloatingWhatsApp;
