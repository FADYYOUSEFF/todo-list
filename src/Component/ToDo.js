import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

//HOOKS
import { useMemo, useState } from "react";
import { useTodos } from "../Context/TodosContext";

// COMPONENTS
import ToDoCard from "./ToDoCard";
import DeleteDialog from "./DeleteDialog";
import EditedDialog from "./EditedDialog";

// CONSTANTS
import { ToggleButtonValues } from "../constants/ToggleButtonValues";
import { Labels } from "../constants/Labels";
import { TodosReducerType } from "../constants/TodosReducerType";

export default function ToDo() {
  const [addToDoField, setAddToDoField] = useState("");
  const { toDoList, dispatch } = useTodos();

  const [toDoToBeDeletedInDialog, setToDoToBeDeletedInDialog] = useState(null);
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);

  const [toDoToBeEditedInDialog, setToDoToBeEditedInDialog] = useState(null);
  const [openEditedDialog, setOpenEditedDialog] = useState(false);

  const [toggleButton, setToggleButton] = useState(ToggleButtonValues.ALL);

  const handleCloseDeleteDialog = () => {
    setToDoToBeDeletedInDialog(null);
    setOpenDeleteDialog(false);
  };

  const completed = useMemo(() => {
    return toDoList.filter((todo) => {
      return todo.isCompeleted;
    });
  }, [toDoList]);

  const notCompleted = useMemo(() => {
    return toDoList.filter((todo) => {
      return !todo.isCompeleted;
    });
  }, [toDoList]);

  let toDotoBeRender;
  if (toggleButton === ToggleButtonValues.COMPLETED) {
    toDotoBeRender = completed;
  } else if (toggleButton === ToggleButtonValues.ALL) {
    toDotoBeRender = toDoList;
  } else if (toggleButton === ToggleButtonValues.NOTCOMPLETED) {
    toDotoBeRender = notCompleted;
  }

  const handleConfirmDeleteDialog = () => {
    dispatch({
      type: TodosReducerType.Deleted,
      payload: { id: toDoToBeDeletedInDialog.id },
    });
    handleCloseDeleteDialog();
  };

  const handleCloseEditedDialog = () => {
    setToDoToBeEditedInDialog(null);
    setOpenEditedDialog(false);
  };

  const handleConfirmEditDialog = (newTodo) => {
    dispatch({ type: TodosReducerType.Updated, payload: newTodo });
    handleCloseEditedDialog();
  };

  const handleInputChange = (event) => {
    setAddToDoField(event.target.value);
  };

  const handleClickEditedIcon = (todo) => {
    setToDoToBeEditedInDialog(todo);
    setOpenEditedDialog(true);
  };
  const handleClickDeleteIcon = (todo) => {
    setToDoToBeDeletedInDialog(todo);
    setOpenDeleteDialog(true);
  };

  const handleClickCheckIcon = (id) => {
    dispatch({ type: TodosReducerType.ChangeCompleteState, payload: { id } });
  };

  const handleClickAddToDo = () => {
    dispatch({
      type: TodosReducerType.Added,
      payload: { title: addToDoField },
    });
    setAddToDoField("");
  };
  const handleClickToggleButton = (event) => {
    setToggleButton(event.target.value);
  };

  const toDoListWithCard = toDotoBeRender.map((todo) => {
    return (
      <ToDoCard
        key={todo.id}
        onClickCheckIcon={() => {
          handleClickCheckIcon(todo.id);
        }}
        onClickEditedIcon={() => {
          handleClickEditedIcon(todo);
        }}
        onClickDeleteIcon={() => {
          handleClickDeleteIcon(todo);
        }}
        todo={todo}
      />
    );
  });

  return (
    <>
      <Container maxWidth="sm" className="todo-container">
        <Typography variant="h4" className="title">
          ToDo List
        </Typography>
        <ToggleButtonGroup
          className="toggle__button--border"
          value={toggleButton}
          exclusive
          onChange={handleClickToggleButton}
          aria-label="text alignment"
        >
          <ToggleButton
            className="toggle__button--border"
            value={ToggleButtonValues.NOTCOMPLETED}
          >
            not completed
          </ToggleButton>
          <ToggleButton
            className="toggle__button--border"
            value={ToggleButtonValues.COMPLETED}
            aria-label="centered"
          >
            completed
          </ToggleButton>

          <ToggleButton
            sx={{ border: "1px solid " }}
            value={ToggleButtonValues.ALL}
            aria-label="left aligned"
          >
            all
          </ToggleButton>
        </ToggleButtonGroup>
        {toDoListWithCard}

        <Grid
          className="input-field"
          container
          spacing={1}
          sx={{ padding: "4px" }}
        >
          <Grid size={8}>
            <TextField
              value={addToDoField}
              id="outlined-basic"
              label={Labels.ADD_TODO}
              variant="filled"
              sx={{ width: "100%" }}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid size={4}>
            <Button
              onClick={handleClickAddToDo}
              variant="contained"
              sx={{ width: "100%", height: "100%" }}
              disabled={addToDoField.length === 0}
            >
              Add
            </Button>
          </Grid>
        </Grid>
        {/* render the deleted dialog only if the toDoToBeDeletedInDialog state are not equal null because in the Dialog component we use it as state inside the component */}
        {toDoToBeDeletedInDialog ? (
          <DeleteDialog
            open={openDeleteDialog}
            handleClose={handleCloseDeleteDialog}
            handleConfirm={handleConfirmDeleteDialog}
            todoTitle={toDoToBeDeletedInDialog.title}
          />
        ) : (
          <></>
        )}
        {/* render the edit dialog only if the toDoToBeEditedInDialog state are not equal null because in the Dialog component we use it as state inside the component */}
        {toDoToBeEditedInDialog ? (
          <EditedDialog
            open={openEditedDialog}
            handleClose={handleCloseEditedDialog}
            handleConfirm={handleConfirmEditDialog}
            todo={toDoToBeEditedInDialog}
          />
        ) : (
          <></>
        )}
      </Container>
    </>
  );
}
