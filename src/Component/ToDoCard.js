import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";

// hooks
import { useContext } from "react";

// context
import { ToDoContext } from "../Context/ToDoContext";

// ICONS
import CheckIcon from "@mui/icons-material/Check";
import DeleteOutlineRoundedIcon from "@mui/icons-material/DeleteOutlineRounded";
import ModeEditRoundedIcon from "@mui/icons-material/ModeEditRounded";

export default function ToDoCard({ onClickCheckIcon, onClickDeleteIcon }) {
  const todo = useContext(ToDoContext);

  return (
    <>
      <Card variant="outlined" className="todo-card">
        <CardContent>
          <Grid container spacing={2}>
            <Grid
              size={8}
              sx={{
                textAlign: "start",
              }}
            >
              <Typography variant="h6">{todo.todo.title}</Typography>
              <Typography variant="p" sx={{ paddingLeft: "8px" }}>
                {todo.todo.detail}
              </Typography>
            </Grid>
            <Grid
              size={4}
              sx={{
                textAlign: "end",
                paddingRight: "16px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  width: "100%",
                  height: "100%",
                }}
              >
                <IconButton
                  onClick={onClickCheckIcon}
                  sx={{
                    color: todo.todo.isCompeleted ? "white" : "green",
                    background: todo.todo.isCompeleted ? "green" : "white",
                    border: "2px solid green",
                  }}
                >
                  <CheckIcon />
                </IconButton>
                <IconButton
                  sx={{
                    color: "blue",
                    background: "white",
                    border: "2px solid blue",
                  }}
                >
                  <ModeEditRoundedIcon />
                </IconButton>
                <IconButton
                  onClick={onClickDeleteIcon}
                  sx={{
                    color: "red",
                    background: "white",
                    border: "2px solid red",
                  }}
                >
                  <DeleteOutlineRoundedIcon />
                </IconButton>
              </div>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </>
  );
}
