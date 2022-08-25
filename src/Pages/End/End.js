import React from "react";
import "./end.css";
import tulip from "../../Assets/Tulip.png";
import { motion } from "framer-motion";

const End = () => {
  return (
    <div id="section-end">
      <p id="title-end">Hasta pronto prop.name</p>
      <p id="main-end">
        Esperamos que hayas liberado y/o canalizado esa emoción negativa de la
        mejor manera y continúes disfrutando de tu día.
      </p>
      <img id="tulip" src={tulip} alt="tulip" />
      <motion.button className="mainButton"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.8, borderRadius: "100%" }}
        >Volver al inicio</motion.button>
      <motion.button className="mainButton"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.8, borderRadius: "100%" }}
        >Cerrar página</motion.button>
    </div>
  );
};

export default End;
