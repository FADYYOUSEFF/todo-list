import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";

// ICONS
import CheckIcon from "@mui/icons-material/Check";
import DeleteOutlineRoundedIcon from "@mui/icons-material/DeleteOutlineRounded";
import ModeEditRoundedIcon from "@mui/icons-material/ModeEditRounded";

export default function ToDoCard() {
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
              <Typography variant="h6">hello</Typography>
              <Typography variant="p" sx={{ paddingLeft: "8px" }}>
                hello
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
                  sx={{
                    color: "green",
                    background: "white",
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
