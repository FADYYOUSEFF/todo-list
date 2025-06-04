import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";

// ICONS
import CheckIcon from "@mui/icons-material/Check";
import DeleteOutlineRoundedIcon from "@mui/icons-material/DeleteOutlineRounded";
import ModeEditRoundedIcon from "@mui/icons-material/ModeEditRounded";

// CONSTANTS
import { Colors } from "../constants/Colors";

export default function ToDoCard({
  onClickCheckIcon,
  onClickDeleteIcon,
  onClickEditedIcon,
  todo,
}) {
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
              <Typography
                variant="h6"
                sx={{
                  textDecoration: todo.isCompeleted ? "line-through" : "none",
                }}
              >
                {todo.title}
              </Typography>
              <Typography
                variant="p"
                sx={{
                  paddingLeft: "8px",
                  textDecoration: todo.isCompeleted ? "line-through" : "none",
                }}
              >
                {todo.detail}
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
                    color: todo.isCompeleted ? Colors.WHITE : Colors.GREEN,
                    background: todo.isCompeleted ? Colors.GREEN : Colors.WHITE,
                    border: "2px solid " + Colors.GREEN,
                  }}
                >
                  <CheckIcon />
                </IconButton>
                <IconButton
                  onClick={onClickEditedIcon}
                  sx={{
                    color: Colors.BLUE,
                    background: Colors.WHITE,
                    border: "2px solid " + Colors.BLUE,
                  }}
                >
                  <ModeEditRoundedIcon />
                </IconButton>
                <IconButton
                  onClick={onClickDeleteIcon}
                  sx={{
                    color: Colors.RED,
                    background: Colors.WHITE,
                    border: "2px solid " + Colors.RED,
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
