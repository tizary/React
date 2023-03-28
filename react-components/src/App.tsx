import React from 'react';
import { BrowserRouter, Navigate, Route } from 'react-router-dom';
import './App.scss';
import Header from './Header/Header';
import Home from './Home/Home';
import About from './About/About';
import FormPage from './FormPage/FormPage';
import { Routes } from 'react-router';
import NotFound from './NotFound/NotFound';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className="app-wrapper">
          <Header />
          <div className="main-content">
            <Routes>
              <Route path="/" element={<Navigate to={'/home'} />} />
              <Route path="/home" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/form" element={<FormPage />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
