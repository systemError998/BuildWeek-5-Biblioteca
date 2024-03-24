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

function App() {
  return (
    <BrowserRouter scrollToTop={true}>
      <AuthProvider>
        <MyNavbar />
        <Scrollata />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="*" element={<NotFoundPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/book/:id" element={<BookDetail />} />
          <Route path="/author/:id" element={<AuthorPage />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
