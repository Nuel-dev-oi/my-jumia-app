import React from 'react';
import Home from './home.jsx';
import About from './about.jsx';
import Appliance from "./appliance.jsx";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from '../components/Layout.jsx';
import Phones from './phonesTablet.jsx';
import Health from './healthBeauty.jsx';

const Pages = () => {
  return (
  <Router>
    <Layout logoName="Jumia">
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="appliances" element={<Appliance />} />
          <Route path="phones_tablets" element={<Phones />} />
          <Route path="health_beauty" element={<Health />} />
        </Route>
        <Route path="/about" element={<About />} />
      </Routes>
    </Layout>
  </Router>
  );
};


export default Pages;
