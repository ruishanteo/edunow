import React, { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { Provider as ReduxProvider } from "react-redux";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useAuthState } from "react-firebase-hooks/auth";

import store from "stores/store.js";

import { auth } from "hooks/Firebase";
import { AuthenticatedRoutes, PublicRoutes } from "routes/";

import desktopImage from "assets/images/backgroundDesktop.jpg";
import mobileImage from "assets/images/backgroundMobile.jpg";

import { Typography } from "@mui/material";

const theme = createTheme({
  typography: {
    fontFamily: [
      '"Segoe UI"',
      "Roboto",
      "sans-serif",
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
  },
  status: {
    danger: "#ebaaa7",
  },
  palette: {
    primary: {
      main: "#E5DDC8 ",
      darker: "#DB1F48",
    },
    neutral: {
      main: "#004369",
      contrastText: "#fff",
    },
  },
});

const App = () => {
  const [user, loading] = useAuthState(auth);

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const imageUrl = windowWidth >= 915 ? desktopImage : mobileImage;

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  if (loading) {
    return <Typography>Loading...</Typography>;
  }

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <ReduxProvider store={store}>
          <>
            <div
              className="App"
              style={{
                backgroundImage: `url(${imageUrl})`,
                height: "100vh",
                backgroundPosition: "center",
                backgroundSize: "cover",
                overflowY: "scroll",
              }}
            >
              {user ? <AuthenticatedRoutes /> : <PublicRoutes />}
            </div>
          </>
        </ReduxProvider>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
