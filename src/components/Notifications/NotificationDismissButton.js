import React from "react";
import { Close } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { useSnackbar } from "notistack";

export const NotificationDismissButton = ({ id }) => {
  const { closeSnackbar } = useSnackbar();
  return (
    <IconButton
      onClick={() => {
        closeSnackbar(id);
      }}
    >
      <Close htmlColor="white" />
    </IconButton>
  );
};

export default NotificationDismissButton;
