import { Route, Routes } from "react-router-dom";

import { ForgetPasswordPage, LoginPage, RegistrationPage } from "Pages/auth";
import { Landing } from "Pages/misc";

const PublicRoutes = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Landing />} />
      <Route exact path="/home" element={<Landing />} />
      <Route exact path="/login" element={<LoginPage />} />
      <Route exact path="/register" element={<RegistrationPage />} />
      <Route exact path="/forgetPassword" element={<ForgetPasswordPage />} />
      <Route path="/*" element={<Landing />} />
    </Routes>
  );
};

export default PublicRoutes;
