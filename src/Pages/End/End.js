import React from "react";
import "./end.css";
import tulip from "../../Assets/Tulip.png";

const End = () => {
  return (
    <div id="section-end">
      <p id="title-end">Hasta pronto prop.name</p>
      <p id="main-end">
        Esperamos que hayas liberado y/o canalizado esa emoción negativa de la
        mejor manera y continúes disfrutando de tu día.
      </p>
      <img id="tulip" src={tulip} alt="tulip" />
      <button>Volver al inicio</button>
      <button>Cerrar página</button>
    </div>
  );
};

export default End;
