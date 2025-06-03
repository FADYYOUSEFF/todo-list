import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import ToDoCard from "./ToDoCard";

export default function ToDo() {
  return (
    <>
      <Container maxWidth="sm" className="todo-container">
        <Typography variant="h4" className="title">
          ToDo List
        </Typography>
        <ToDoCard />
        <ToDoCard />
        <Grid
          className="input-field"
          container
          spacing={1}
          sx={{ padding: "4px" }}
        >
          <Grid size={8}>
            <TextField
              id="outlined-basic"
              label="AddTodo"
              variant="filled"
              sx={{ width: "100%" }}
            />
          </Grid>
          <Grid size={4}>
            <Button variant="contained" sx={{ width: "100%", height: "100%" }}>
              Add
            </Button>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
