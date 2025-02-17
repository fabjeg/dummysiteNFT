import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./text.css";

export function Text() {
  const words = ["BINABOX", "MUSIC", "NFT"];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [words.length]);

  return (
    <div className="title">
      <AnimatePresence>
        <motion.p
          className="txt"
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: "0%", opacity: 1 }}
          exit={{ y: "-100%", opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          WITH{" "}
          <span className="txt_span word-container">
            <AnimatePresence mode="popLayout">
              <motion.span
                key={currentWordIndex}
                initial={{ y: "-100%", opacity: 0 }}
                animate={{ y: "0%", opacity: 1 }}
                exit={{ y: "30%", opacity: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }} // Délai ajouté pour l'animation séquentielle
                className="word"
              >
                {words[currentWordIndex]}
              </motion.span>
            </AnimatePresence>
          </span>
          <br />
          EXPLORE NFT COLLECTION
        </motion.p>
      </AnimatePresence>
      <AnimatePresence>
        <motion.p
          className="txt2"
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: "0%", opacity: 1 }}
          exit={{ y: "-100%", opacity: 0 }}
          transition={{ duration: 0.5, delay: 1 }} // Délai ajouté pour l'animation séquentielle
        >
          we are the best way to check the rarity of NFT collection
        </motion.p>
      </AnimatePresence>
      <AnimatePresence>
        <motion.div
          className="button_txt"
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: "0%", opacity: 1 }}
          exit={{ y: "-100%", opacity: 0 }}
          transition={{ duration: 0.5, delay: 1.5 }} // Délai ajouté pour l'animation séquentielle
        >
          <button className="style_button">CONNECT WALLET</button>
          <button className="style_button2">WHITELIST NOW</button>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
