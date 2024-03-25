import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./Pages/HomePage";
import NotFoundPage from "./Pages/NotFoundPage";
import ProfilePage from "./Pages/ProfilePage";
import Login from "./Pages/Login";
import MyNavbar from "./Components/MyNavbar";
import Register from "./Pages/Register";
import { BookDetail } from "./Pages/BookDetail";
import { AuthorPage } from "./Pages/AuthorPage";
import Scrollata from "./Components/Scrollata";
import { AuthProvider } from "./context/AuthContext.jsx";
import AuthLayout from "./layouts/AuthLayout.jsx";
import GuestLayout from "./layouts/GuestLayout.jsx";
import AdminLayout from "./layouts/AdminLayout.jsx";

function App() {
  return (
    <BrowserRouter scrollToTop={true}>
      <AuthProvider>
        <MyNavbar />
        <Scrollata />
        <Routes>
        <Route path="/" element={<HomePage />} />
          <Route element={<AuthLayout />}>
            <Route path="/book/:id" element={<BookDetail />} />
            <Route path="/author/:id" element={<AuthorPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route element={<AdminLayout />}>
              {/* rotte admin */}
            </Route>
          </Route>
          <Route element={<GuestLayout />}>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
