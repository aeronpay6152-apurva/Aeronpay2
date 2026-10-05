import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home/home';
import Contact from './pages/contact/contact';
import BlogPage from './pages/blog/blog';
import Header from './pages/Components/header';
import ScrollToggle from './pages/Components/ScrollToggle';
import logo from './assets/images/light-logo.svg';

import './App.css';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loaderTimer = window.setTimeout(() => setIsLoading(false), 1500);

    return () => window.clearTimeout(loaderTimer);
  }, []);

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>

      {isLoading && (
        <div className="aeronpay-loader" aria-label="Loading AeronPay">
          <img className="aeronpay-loader-logo" src={logo} alt="AeronPay" />
        </div>
      )}

      <ScrollToggle />
    </>
  );
}

export default App;
