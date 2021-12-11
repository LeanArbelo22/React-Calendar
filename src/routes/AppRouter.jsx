import React from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route,
  } from "react-router-dom";
import LoginScreen from '../components/auth/LoginScreen';
import CalendarScreen from '../components/calendario/CalendarScreen';
import Navbar from '../components/UI/Navbar';

  const AppRouter = () => {
      return(
        <Router>
          <Navbar />
            <Routes>
                <Route path="login" element={<LoginScreen />} />
                <Route path="calendar" element={<CalendarScreen />} />
            </Routes> 
        </Router>
      )
  };

  export default AppRouter;