/* eslint-disable no-unused-vars */
import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Loader({ setLoading }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // duración simulada

    return () => clearTimeout(timer);
  }, [setLoading]);

  const dotTransition = {
    repeat: Infinity,
    duration: 1,
    ease: "easeInOut"
  };

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center bg-[#1e1e1e]"
        initial={{ opacity: 1 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="flex space-x-2">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="w-3 h-3 rounded-full bg-[#4ACAE2]"
              initial={{ opacity: 0.2, y: 0 }}
              animate={{
                opacity: [0.2, 1, 0.2],
                y: [0, -4, 0]
              }}
              transition={{
                ...dotTransition,
                delay: i * 0.2
              }}
            />
          ))}
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
