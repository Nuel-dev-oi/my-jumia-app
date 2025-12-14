import React from 'react';
import Home from './home.jsx';
import About from './about.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from '../components/Layout.jsx';

const Pages = () => (
  <Router>
    <Layout logoName="Jumia">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Layout>
  </Router>
);

export default Pages;
