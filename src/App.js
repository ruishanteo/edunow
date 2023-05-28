import React, { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { Provider as ReduxProvider } from "react-redux";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import store from "stores/store.js";

import { useAuth } from "hooks/FirebaseHooks";
import { AuthenticatedRoutes, PublicRoutes } from "routes/";

import desktopImage from "assets/images/backgroundDesktop.jpg";
import mobileImage from "assets/images/backgroundMobile.jpg";

// import { saveQuestions } from "stores/questionStore";
// import { loadQuestions } from "Pages/quiz/QuestionsReader";
// import { Button } from "@mui/material";

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
  const user = useAuth();

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
          {/* <Button
            onClick={async () => {
              console.log("here");
              const data = await loadQuestions();
              store.dispatch(saveQuestions(data));
            }}
          >
            YES
          </Button> */}

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
