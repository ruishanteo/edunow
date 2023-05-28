import React from "react";
import { Link } from "react-router-dom";

import { Box, Button, Typography } from "@mui/material";

export const Home = () => {
  return (
    <Box align="center" variant="text">
      <Box height="110px" />
      <Box>
        <Typography
          mb={5}
          variant="h2"
          sx={{
            fontFamily: "Roboto",
            letterSpacing: 10,
            fontWeight: 800,
            fontSize: 70,
          }}
        >
          WELCOME
        </Typography>

        <Typography variant="h5" sx={{ fontFamily: "Roboto", marginTop: 2 }}>
          This is a description text.
        </Typography>
        <Button variant="contained" sx={{ mt: 8 }}>
          <Link to="/page" style={{ color: "black", textDecoration: "none" }}>
            Button
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

export default Home;
