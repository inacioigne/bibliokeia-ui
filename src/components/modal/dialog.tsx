import { Dialog, DialogTitle, DialogActions, Button } from "@mui/material/";
export default function AlertDialog({ open, setOpen, handleClose }) {
  return (
    <Dialog
      open={open}
      onClose={() => {
        setOpen(false);
      }}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      {" "}
      <DialogTitle id="alert-dialog-title">
        {"Você tem certeza que deseja excluir esse item?"}
      </DialogTitle>
      <DialogActions>
        <Button
          onClick={() => {
            setOpen(false);
          }}
        >
          Cancelar
        </Button>
        <Button
          onClick={handleClose}
          autoFocus
        >
          Excluir
        </Button>
      </DialogActions>
    </Dialog>
  );
}
