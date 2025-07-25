import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";
import { motion, AnimatePresence } from 'framer-motion';

export default function ScrollTop() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            setVisible(window.scrollY > 300);
        };

        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    const scrollTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });

    }

    if (!visible) return null;

    return (

        <AnimatePresence>
            {visible && (
                <motion.button
                    onClick={scrollTop}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.3 }}
                    whileHover={{ scale: 1.1 }}
                    className="fixed bottom-6 right-6 cursor-pointer z-50 bg-[#4ACAE2] hover:bg-[#37a2b0] text-white p-3 rounded-full shadow-lg"
                >
                    <motion.div
                        animate={{ y: [0, -2, 0] }}
                        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                    >
                        <FaArrowUp className="w-4 h-4" />
                    </motion.div>
                </motion.button>
            )}
        </AnimatePresence>

    )

}








