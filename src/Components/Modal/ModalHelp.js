import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
const ModalHelp = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>Necesito hablar con alguien</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Opciones del programa de asistencia
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Descarga nuestra app iConnect, da de alta tu cuenta con tu correo
            corporativo y has clic en la opción hablar con alguien.
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Marca a los números 800 3465 5532, solo menciona que laboras para
            Luxoft y un psicólogo te dará la atención que necesitas.
          </Typography>
        </Box>
      </Modal>
    </div>
  );
};

export default ModalHelp;
