import { BrowserRouter, Routes, Route } from "react-router-dom";
import AuthLayout from './layouts/AuthLayout'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import ForgotPassword from './pages/ForgotPassword'
import NewPassword from './pages/NewPassword'
import VerifyAccount from './pages/VerifyAccount'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AuthLayout />}>
          <Route index element={<Login />} />
          <Route path="sign-up" element={<SignUp />} />
          <Route path="forgot-password" element={<ForgotPassword />} />
          <Route path="forgot-password/:token" element={<NewPassword />} />
          <Route path="verify-account/:id" element={<VerifyAccount />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
