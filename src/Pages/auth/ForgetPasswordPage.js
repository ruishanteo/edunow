import { Box, Button, Container, TextField, Typography } from "@mui/material";

import { sendPasswordReset } from "hooks/FirebaseHooks";

export default function ForgetPasswordPage() {
  const handleReset = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    sendPasswordReset(data.get("email"));
  };

  return (
    <Box align="center">
      <Box height="15vh" />
      <Box
        sx={{
          align: "center",
          backgroundColor: "rgba(255,255,255,0.5)",
          width: "40vw",
          height: "40vh",
          justifyContent: "center",
          display: "flex",
        }}
      >
        <Container component="main" maxWidth="xs">
          <Box
            sx={{
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography component="h1" variant="h5">
              Reset Password
            </Typography>
            <Box
              component="form"
              onSubmit={handleReset}
              noValidate
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
              />

              <Button
                type="submit"
                onSubmit={handleReset}
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Send Email
              </Button>
            </Box>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}
