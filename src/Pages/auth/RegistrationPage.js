import * as React from "react";
import { useNavigate } from "react-router-dom";

import { registerWithEmailAndPassword } from "hooks/FirebaseHooks";

import {
  Box,
  Button,
  Container,
  Grid,
  Link,
  TextField,
  Typography,
} from "@mui/material";

import { createTheme, ThemeProvider } from "@mui/material/styles";

export default function RegistrationPage() {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    registerWithEmailAndPassword(
      data.get("firstName"),
      data.get("email"),
      data.get("password")
    ).then(() => navigate("/home"));
  };

  return (
    <Box align="center">
      <Box height="15vh" />
      <Box
        sx={{
          align: "center",
          backgroundColor: "rgba(255,255,255,0.5)",
          width: "40vw",
          height: "60vh",
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
              Sign up
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 3 }}
            >
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    autoComplete="given-name"
                    name="firstName"
                    required
                    fullWidth
                    id="firstName"
                    label="Name"
                    autoFocus
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="new-password"
                  />
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign Up
              </Button>
              <Grid container justifyContent="flex-end">
                <Grid item>
                  <Link
                    href="/login"
                    variant="body2"
                    style={{ color: "black" }}
                  >
                    Already have an account? Sign in
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}
