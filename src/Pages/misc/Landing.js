import React from "react";
import { Link } from "react-router-dom";

import { Box, Button, Typography } from "@mui/material";

const Landing = () => {
  return (
    <Box align="center" variant="text">
      <Box height="110px" />
      <Box>
        <Typography
          mb={5}
          variant="h2"
          sx={{
            color: "white",
            fontFamily: "Roboto",
            letterSpacing: 10,
            fontWeight: 800,
            fontSize: 70,
          }}
        >
          EDUNOW
        </Typography>

        <Typography
          variant="h5"
          sx={{ fontFamily: "Roboto", marginTop: 2, color: "white" }}
        >
          Test your general knowledge here!
        </Typography>

        <Button variant="contained" sx={{ mt: 8, mr: 4 }}>
          <Link to="/login" style={{ color: "black", textDecoration: "none" }}>
            Log in
          </Link>
        </Button>
        <Button variant="contained" sx={{ mt: 8 }}>
          <Link
            to="/register"
            style={{ color: "black", textDecoration: "none" }}
          >
            Register
          </Link>
        </Button>
      </Box>

      <Box height="190px" />

      <Box display="flex" flexDirection="row">
        <Box width="80px" />
        <Box align="left" display="flex" flexDirection="column"></Box>
      </Box>
    </Box>
  );
};

export default Landing;
