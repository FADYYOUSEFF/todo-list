import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
// HOOKS
import { useState } from "react";

//CONSTANTS
import { Labels } from "../constants/Labels";

export default function EditedDialog({
  open,
  handleClose,
  handleConfirm,
  todo,
}) {
  const [editedTod, setEditedTod] = useState(todo);
  return (
    <React.Fragment>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Edit ToDo</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            required
            margin="dense"
            name="title"
            label={Labels.TITLE}
            value={editedTod.title}
            onChange={(event) => {
              setEditedTod({ ...editedTod, title: event.target.value });
            }}
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            required
            margin="dense"
            name="detail"
            label={Labels.DETEAILS}
            value={editedTod.detail}
            onChange={(event) => {
              setEditedTod({ ...editedTod, detail: event.target.value });
            }}
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button
            onClick={() => {
              handleConfirm(editedTod);
            }}
          >
            Edit
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
