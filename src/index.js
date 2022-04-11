import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Navbar from './components/nav/Navbar.js';
import Footer from './components/footer/Footer.js';
import routes from './documents/routes.js';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <div>Hola mundo</div>
    <Navbar />
    <BrowserRouter>
      <Routes>
        {
          routes.map((element) => {
            return <Route path={element.path} element={element.page}></Route>;
          })
        }
      </Routes>
    </BrowserRouter>
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
)
