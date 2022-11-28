import { BrowserRouter, Routes, Route } from "react-router-dom";
import RequireAuth from "./helpers/auth/requireAuth";
import RequireGust from "./helpers/auth/requireGust";
import Home from "./pages/home";
import LoginPage from "./pages/loginPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<RequireAuth />}>
          <Route path="/" element={<Home />} />
        </Route>
        <Route element={<RequireGust />}>
          <Route path="/login" element={<LoginPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
