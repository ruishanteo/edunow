import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider as ReduxProvider } from "react-redux";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { SnackbarProvider } from "notistack";

import Header from "components/Navigation/Header.js";
import {
  Notifications,
  NotificationDismissButton,
} from "components/Notifications";
import Home from "Pages/Home.js";
import Page from "Pages/Page.js";
import store from "stores/store.js";

import desktopImage from "assets/images/backgroundDesktop.jpg";
import mobileImage from "assets/images/backgroundMobile.jpg";

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

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <ReduxProvider store={store}>
          <SnackbarProvider
            maxSnack={5}
            action={(id) => <NotificationDismissButton id={id} />}
            anchorOrigin={{
              vertical: "top",
              horizontal: "center",
            }}
          >
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
                <Notifications />
                <Header />
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/home" element={<Home />} />
                  <Route path="/page" element={<Page />} />
                </Routes>
              </div>
            </>
          </SnackbarProvider>
        </ReduxProvider>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
