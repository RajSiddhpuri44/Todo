import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import EditNoteIcon from "@mui/icons-material/EditNote";
import DialogTitle from "@mui/material/DialogTitle";
import { editTodo } from "./helper";
export default function FormDialog({ task, toggleTask, todos }) {
  const [open, setOpen] = React.useState(false);
  const [editTask, setEditTask] = React.useState(task.task);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    toggleTask(editTodo(todos, task.id, editTask));
    handleClose();
  };

  return (
    <React.Fragment>
      <EditNoteIcon onClick={handleClickOpen} />
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Edit Task</DialogTitle>
        <DialogContent>
          <form onSubmit={handleSubmit} id="subscription-form">
            <TextField
              autoFocus
              required
              margin="dense"
              id="name"
              name="email"
              label="Edit Task"
              type="text"
              fullWidth
              variant="standard"
              value={editTask}
              onChange={(event) => {
                setEditTask(event.target.value);
              }}
            />
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button type="submit" form="subscription-form">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
