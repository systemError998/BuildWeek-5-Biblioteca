import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './Pages/HomePage';
import NotFoundPage from './Pages/NotFoundPage';
import ProfilePage from './Pages/ProfilePage';
import Login from './Pages/Login';


function App() {
  return (
    <BrowserRouter scrollToTop={true}>

    {/*   <Scrollata /> */}
      <Routes>
        <Route path="/" element={<HomePage />} />  
        <Route path="/dashboard" element={< ProfilePage />} />
        <Route path="*" element={< NotFoundPage />} />
        <Route path='/login' element={<Login/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
