import { motion } from "framer-motion";
import React from "react";
import "./end.css";
import tulip from "../../Assets/Tulip.png";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react';

export const End = () => {

  const navigate = useNavigate();
  const [items, setItems] = useState([]);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem('values'));
    if (items) {
      setItems(items);
    }
  }, []);

  const handleOnClick = () => {
    console.log('holi')
    navigate('/')
  }

  // const handleClose = () => {
  //   window.top.close();
  // }

  const { name } = items;

  return (
    <div id="section-end">
      <p id="title-end">Hasta pronto {name}</p>
      <p id="main-end">
        Esperamos que hayas liberado y/o canalizado esa emoción negativa de la
        mejor manera y continúes disfrutando de tu día.
      </p>
      <img id="tulip" src={tulip} alt="tulip" />
      <motion.button onClick={handleOnClick} whileHover={{ scale: 1.1 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
        className='mainButton'>Volver al inicio</motion.button>
      {/* <button className='mainButton' onClick={handleClose}>Cerrar página</button> */}
    </div>
  );
};


