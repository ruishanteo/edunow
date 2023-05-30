import React from "react";

import { Box, Button, Typography } from "@mui/material";

import SchoolIcon from "@mui/icons-material/School";

export const Home = () => {
  return (
    <Box align="center" variant="text">
      <Box height="110px" />
      <Box>
        <SchoolIcon
          sx={{
            color: "white",
            fontFamily: "Roboto",
            letterSpacing: 10,
            fontWeight: 800,
            fontSize: 70,
          }}
        />
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
          WELCOME
        </Typography>
        <Typography
          variant="h5"
          sx={{ fontFamily: "Roboto", mt: 2, mb: 8, color: "white" }}
        >
          Test your general knowledge here!
        </Typography>
        <Button variant="contained" href="/quiz">
          Go to Quiz
        </Button>
      </Box>
    </Box>
  );
};

export default Home;
