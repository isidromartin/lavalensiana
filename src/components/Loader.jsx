import { motion } from "framer-motion";

const Loader = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-[#F8F1E5]">
      <motion.div
        className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
      />
    </div>
  );
};

export default Loader;
