import logo from './logo.svg';
import './App.css';
import { Routes,Route } from 'react-router-dom';
import HomePage from './pages/Home'
import RegisterPage from './pages/Register';
import Login from './pages/Login';
import NavBar from './pages/Navbar';

import { ToastContainer } from 'react-toastify';
import ThemeToggle from './components/ThemeToggle';
import Wellcome from './pages/Wellcome';
import Group from './pages/Group';
import Personal from './pages/Personal';
import GroupJoin from './pages/GroupJoin';
import GroupOfMe from './pages/GroupOfMe';
import Setting from './pages/Setting'
function App() {
 return(
    <>

       
          {/* <NavBar/> */}
          <ToastContainer/>
          <Routes>
          <Route path="/" element={<Wellcome/>}/>
          <Route path="/home" element={<HomePage/>}/>
          <Route path="/register" element={<RegisterPage />}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/group" element={<Group/>}/>
          <Route path="/groupjoin" element={<GroupJoin/>}/>
          <Route path="/groupofme" element={<GroupOfMe/>}/>
          <Route path="/personal" element={<Personal/>}/>
          <Route path="/setting" element={<Setting/>}/>

          </Routes>
    

    </>
  );
}

export default App;
