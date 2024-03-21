import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './Pages/HomePage';
import NotFoundPage from './Pages/NotFoundPage';
import Navbar from './Components/Navbar';

function App() {
  return (
    <BrowserRouter scrollToTop={true}>
      <Navbar />
      <Scrollata />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={< NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
