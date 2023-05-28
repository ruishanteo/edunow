import { Route, Routes } from "react-router-dom";

import { Home } from "Pages/misc";
import Header from "components/Navigation/Header.js";
import Leaderboard from "Pages/user/Leaderboard";
import QuizPage from "Pages/quiz/QuizPage";

const AuthenticatedRoutes = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/leaderboard" element={<Leaderboard />} />
        <Route exact path="/quiz" element={<QuizPage />} />
        <Route path="/*" element={<Home />} />
      </Routes>
    </>
  );
};

export default AuthenticatedRoutes;
