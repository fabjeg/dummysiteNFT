import "./headband.css";
import { motion } from "framer-motion";

export function Headband() {
  const words = Array(20).fill("BINABOX").join("  "); 

  return (
    <div className="headband">
      <motion.div
        className="p_headband_container"
        animate={{ x: ["0%", "-50%"] }} 
        transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
      >
        <p className="p_headband">{words} {words}</p> 
      </motion.div>
    </div>
  );
}
