import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  return (
    <motion.a
      href="https://wa.me/573001234567?text=Hola%20ValenDevs,%20me%20interesa%20cotizar%20un%20sitio%20web"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 200 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <div className="relative">
        {/* Pulse Ring */}
        <div className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30" />
        
        {/* Button */}
        <div className="relative w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center shadow-lg shadow-[#25D366]/30 hover:shadow-[#25D366]/50 transition-shadow">
          <MessageCircle className="w-6 h-6 text-white" />
        </div>

        {/* Tooltip */}
        <motion.div
          initial={{ opacity: 0, x: 10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 2 }}
          className="absolute right-full mr-3 top-1/2 -translate-y-1/2 whitespace-nowrap"
        >
          <div className="glass-card px-3 py-2 text-sm text-foreground">
            ¡Escríbenos por WhatsApp!
          </div>
        </motion.div>
      </div>
    </motion.a>
  );
};

export default WhatsAppButton;
