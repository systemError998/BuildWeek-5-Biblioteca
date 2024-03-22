import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from './Pages/HomePage';
import NotFoundPage from './Pages/NotFoundPage';
import ProfilePage from './Pages/ProfilePage';
import MyNavbar from './Components/MyNavbar';


function App() {
  return (
    <BrowserRouter scrollToTop={true}>
      <MyNavbar />
    {/*   <Scrollata /> */}
      <Routes>
        <Route path="/" element={<HomePage />} />  
        <Route path="*" element={< NotFoundPage />} />
      
      </Routes>
    </BrowserRouter>
  );
}

export default App;
