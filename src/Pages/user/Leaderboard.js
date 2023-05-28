import { Box, Typography } from "@mui/material";

const Leaderboard = () => {
  return (
    <Box align="center">
      <Box sx={{ height: "10vh" }} />
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
        Leaderboard
      </Typography>
    </Box>
  );
};

export default Leaderboard;
