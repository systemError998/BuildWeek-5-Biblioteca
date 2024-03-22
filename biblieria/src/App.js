import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from './Pages/HomePage';
import NotFoundPage from './Pages/NotFoundPage';
import ProfilePage from './Pages/ProfilePage';
import MyNavbar from './Components/MyNavbar';
import { BookDetail } from './Pages/BookDetail';
import { AuthorPage } from './Pages/AuthorPage';


function App() {
  return (
    <BrowserRouter scrollToTop={true}>
      <MyNavbar />
    {/*   <Scrollata /> */}
      <Routes>
        <Route path="/" element={<HomePage />} />  
        <Route path="*" element={< NotFoundPage />} />
        <Route path="/book/:id" element={<BookDetail />} />  
        <Route path="/author/:id" element={<AuthorPage />} /> 
        <Route path="/profile" element={<ProfilePage />} /> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;
