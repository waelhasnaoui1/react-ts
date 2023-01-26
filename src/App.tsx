import React from 'react';
import './App.css';
import LoginPage from './pages/LoginPage';
import {Routes,Route} from 'react-router-dom';
import SignUpPage from './pages/SignUpPage';
import ForgotPasswordPage from './pages/ForgotPasswordPage';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/signup' element={<SignUpPage/>}/>
        <Route path='/forgot_password' element={<ForgotPasswordPage/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
