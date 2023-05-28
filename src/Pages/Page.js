import * as React from "react";

import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";

export default function Page() {
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box mt={5} align="center">
      <Typography sx={{ fontWeight: 600, fontFamily: "Roboto" }} variant="h4">
        Dialog Page
      </Typography>

      <Card sx={{ maxWidth: 345, mt: 3 }}>
        <CardMedia
          component="img"
          alt="project1"
          height="140"
          image="/static/images/cards/contemplative-reptile.jpg"
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            fontFamily="Roboto"
            component="div"
          >
            Project1
          </Typography>
          <Typography
            fontFamily="Roboto"
            variant="body1"
            color="text.secondary"
          >
            text description
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Button 1</Button>
          <Button size="small" onClick={handleClickOpen}>
            Open Dialog
          </Button>
          <Dialog
            fullScreen={fullScreen}
            open={open}
            onClose={handleClose}
            aria-labelledby="responsive-dialog-title"
          >
            <DialogTitle id="responsive-dialog-title" variant="h5">
              {"Dialog"}
            </DialogTitle>
            <DialogContent>
              <DialogContentText variant="body2">
                Some text description
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button autoFocus onClick={handleClose}>
                Close
              </Button>
            </DialogActions>
          </Dialog>
        </CardActions>
      </Card>
    </Box>
  );
}
