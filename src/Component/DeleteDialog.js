import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

export default function AlertDialog({
  open,
  handleClose,
  handleConfirm,
  todoTitle,
}) {
  return (
    <>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{"Do you want to Delete " + todoTitle + " ?"}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            if you delete {todoTitle}, you can't return it back.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>No</Button>
          <Button onClick={handleConfirm} autoFocus>
            Yes
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
