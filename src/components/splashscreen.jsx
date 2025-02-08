import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

function Screen() {
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect to /summerschool after 5 seconds
    const timer = setTimeout(() => {
      navigate("/summerschool");
    }, 2700);

    return () => clearTimeout(timer); // Cleanup on unmount
  }, [navigate]);

  return (
    <div className="relative h-screen w-full overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-full w-full">
        <motion.div
          initial={{ y: 200, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            ease: "easeOut",
            duration: 1,
          }}
          className="flex h-full w-full items-center justify-center bg-white"
        >
          <img src="/nike-logo.png" alt="" className="w-80" />
        </motion.div>
      </div>
      <motion.div
        initial={{ y: -650, x: -650 }}
        animate={{ y: 0, x: 0 }}
        transition={{
          ease: "easeOut",
          duration: 1,
          delay: 1.5,
        }}
        className="absolute top-0 left-0 right-0 h-full w-full"
      >
        <img src="/bg-blur-cp.png" alt="" className="h-full w-full scale-[2]" />
      </motion.div>
    </div>
  );
}

export default Screen;
