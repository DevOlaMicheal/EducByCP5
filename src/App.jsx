import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { auth } from './firebase';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'font-awesome/css/font-awesome.min.css';
import './assets/css/style.css';

import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import Painting from './pages/Painting';
import Layout from './components/Layout';
import Programming from './pages/Programming'
import DigitalMarketting from './pages/DigitalMarketting';
import ComputerScience from './pages/ComputerScience';
import DataScience from './pages/DataScience';
import Economics from './pages/Economics';
import Baking from './pages/Baking';
import Tailoring from './pages/Tailoring';
import HairStyling from './pages/HairStyling';
import Capentry from './pages/Capentry';
import { onAuthStateChanged } from 'firebase/auth';

const App = () => {

  const [authUser, setauthUser] = useState(null);

  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setauthUser(user)
      }else{
        setauthUser(null)
      }
    })
  }, []);

  return (
    <Router>
      <div className='container-full'>
        <Header />

        <section className="main-body container-fluid px-5 py-4">
          <Routes>
            
            <Route path="/" exact element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/painting" element={<Painting />} />
            <Route path="/Programming" element={<Programming />} />
            <Route path="/DigitalMarketting" element={<DigitalMarketting />} />
            <Route path="/ComputerScience" element={<ComputerScience />} />
            <Route path="/DataScience" element={<DataScience />} />
            <Route path="/Economics" element={<Economics />} />
            <Route path="/Baking" element={<Baking />} />
            <Route path="/Tailoring" element={<Tailoring />} />
            <Route path="/HairStyling" element={<HairStyling />} />
            <Route path="/Capentry" element={<Capentry />} />

          </Routes>
        </section>

        <Footer />
      </div>
    </Router>
  );
};

export default App;
