import { useEffect, useState } from "react";
import { FaArrowUp, FaWhatsapp } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

export default function FloatingButtons() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const phone = "50683712879"; // Reemplaza con tu número
  const message = "Hola! Estoy interesado en tus servicios.";
  const whatsappURL = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  return (
    <AnimatePresence>
      {visible && (
        <>
          {/* WhatsApp Button */}
          <motion.a
            href={whatsappURL}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3 }}
            whileHover={{ scale: 1.1 }}
            className="fixed bottom-20 right-6 z-50 bg-[#4ACAE2] hover:bg-[#37a2b0] text-white p-3 rounded-full shadow-lg"
          >
            <motion.div
              animate={{ y: [0, -2, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <FaWhatsapp className="w-5 h-5" />
            </motion.div>
          </motion.a>

          {/* Scroll To Top Button */}
          <motion.button
            onClick={scrollTop}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3 }}
            whileHover={{ scale: 1.1 }}
            className="fixed bottom-6 right-6 z-50 bg-[#4ACAE2] hover:bg-[#37a2b0] text-white p-3 rounded-full shadow-lg"
          >
            <motion.div
              animate={{ y: [0, -2, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <FaArrowUp className="w-4 h-4" />
            </motion.div>
          </motion.button>
        </>
      )}
    </AnimatePresence>
  );
}
