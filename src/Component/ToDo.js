import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

//OTHERS
import { v4 as uuidv4 } from "uuid";

//HOOKS
import { useState } from "react";

//CONTEXT
import { ToDoContext } from "../Context/ToDoContext";

// DATA
import { ToDoList } from "../data/todoList";

// COMPONENTS
import ToDoCard from "./ToDoCard";

export default function ToDo() {
  const [addToDoField, setAddToDoField] = useState("");
  const [toDoList, setToDoList] = useState(ToDoList);
  function handleInputChange(event) {
    setAddToDoField(event.target.value);
  }

  const toDoListWithCard = toDoList.map((todo) => {
    return (
      <ToDoContext.Provider key={todo.id} value={{ todo, setToDoList }}>
        <ToDoCard
          onClickCheckIcon={() => {
            handleClickCheckIcon(todo.id);
          }}
          onClickDeleteIcon={() => {
            handleClickDeleteIcon(todo.id);
          }}
        />
      </ToDoContext.Provider>
    );
  });
  function handleClickCheckIcon(id) {
    const newToDoList = toDoList.map((t) => {
      if (t.id === id) {
        t.isCompeleted = !t.isCompeleted;
      }
      return t;
    });
    setToDoList(newToDoList);
  }
  function handleClickDeleteIcon(id) {
    const newToDoList = toDoList.filter((t) => t.id !== id);
    setToDoList(newToDoList);
  }
  function handleClick() {
    if (addToDoField === "" || addToDoField === null) {
      alert("Enter the Title of ToDo");
    } else {
      const newToDo = {
        id: uuidv4(),
        title: addToDoField,
        detail: addToDoField,
        isCompeleted: false,
      };
      setToDoList([...toDoList, newToDo]);
      setAddToDoField("");
    }
  }
  return (
    <>
      <Container maxWidth="sm" className="todo-container">
        <Typography variant="h4" className="title">
          ToDo List
        </Typography>
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
              label="AddTodo"
              variant="filled"
              sx={{ width: "100%" }}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid size={4}>
            <Button
              onClick={handleClick}
              variant="contained"
              sx={{ width: "100%", height: "100%" }}
            >
              Add
            </Button>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
