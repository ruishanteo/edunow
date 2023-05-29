import { Box, Typography } from "@mui/material";

import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";

const Leaderboard = () => {
  return (
    <Box align="center">
      <Box sx={{ height: "10vh" }} />
      <EmojiEventsIcon sx={{ color: "white", fontWeight: 800, fontSize: 70 }} />
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

      <Box
        sx={{
          backgroundColor: "rgba(255,255,255,0.7)",
          width: "50vw",
          height: "8vh",
          alignItems: "center",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          mt: 2,
        }}
      >
        <Typography sx={{ fontSize: 30 }}>
          1. This is the name of the user
        </Typography>
      </Box>

      <Box
        sx={{
          backgroundColor: "rgba(255,255,255,0.7)",
          width: "50vw",
          height: "8vh",
          alignItems: "center",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          mt: 2,
        }}
      >
        <Typography sx={{ fontSize: 30 }}>
          2. This is the name of the user
        </Typography>
      </Box>
      <Box
        sx={{
          backgroundColor: "rgba(255,255,255,0.7)",
          width: "50vw",
          height: "8vh",
          alignItems: "center",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          mt: 2,
        }}
      >
        <Typography sx={{ fontSize: 30 }}>
          3. This is the name of the user
        </Typography>
      </Box>
    </Box>
  );
};

export default Leaderboard;
