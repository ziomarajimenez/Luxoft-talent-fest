import { useRef } from "react";
import { CSSTransition } from "react-transition-group";
import ReactPortal from "./ReactPortal";
import "./modal.css";

function Modal({ isOpen, handleClose }) {
  const nodeRef = useRef(null);

  return (
    <ReactPortal wrapperId="react-portal-modal-container">
      <CSSTransition
        in={isOpen}
        timeout={{ entry: 0, exit: 300 }}
        unmountOnExit
        classNames="modal"
        nodeRef={nodeRef}
      >
        <div className="modal" ref={nodeRef}>
          <div className="modal-content">
            <section className="modal-header">
              <p className="title-modal">Opciones del programa de asistencia</p>
              <button className="modal-btn" onClick={handleClose}>
                X
              </button>
            </section>
            <p className="modal-p">
              Descarga nuestra app iConnect, da de alta tu cuenta con tu correo
              corporativo y haz clic en la opción "Hablar con alguien".
            </p>
            <p className="modal-p">
              Llama al número 800 3465 5532, solo menciona que laboras para
              Luxoft y un profesional te dará la atención psicológica que necesitas.
            </p>
          </div>
        </div>
      </CSSTransition>
    </ReactPortal>
  );
}
export default Modal;
