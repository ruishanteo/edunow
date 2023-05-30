import { useCallback, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { fetchUsers } from "stores/userStore";

import { Box, Typography } from "@mui/material";

import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";

const Leaderboard = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.users);
  const currentScore = useSelector((state) => state.users.currentScore);

  const onUpdate = useCallback(() => {
    dispatch(fetchUsers);
  }, [dispatch]);
  useEffect(() => onUpdate(), [onUpdate]);

  if (!users) {
    return <Typography>No users...</Typography>;
  }

  const usersMutatable = [...users];

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
      {usersMutatable
        .sort((a, b) => b.score - a.score)
        .map((user, index) => {
          return (
            <Box
              key={index}
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
                {`${index + 1}. ${user.displayName}, Score: ${user.score}`}
              </Typography>
            </Box>
          );
        })}
    </Box>
  );
};

export default Leaderboard;
