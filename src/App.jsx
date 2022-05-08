import React from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import Content from './pages/Content';
import { Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <>
      {/* HEADER */}
      <Header />

      <Routes>
        <Route path="/" element={<Content />} />
      </Routes>

      {/* FOOTER */}
      <Footer />
    </>
  );
};

export default App;
