import React from 'react';
import Home from './home.jsx';
import About from './about.jsx';
import Appliance from './appliance.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from '../components/Layout.jsx';
import Phones from './phonesTablet.jsx';
import Health from './healthBeauty.jsx';
import Office from './homeOffice.jsx';
import Electronics from './electronics.jsx';
import Fashion from './fashion.jsx';
import Super from './superMarket.jsx';
import Computer from './computer.jsx';
import BabyProduct from './babyProduct.jsx';
import Gaming from './gaming.jsx';
import Musical from './musical.jsx';
import Other from './others.jsx';

const Pages = () => {
  return (
    <Router>
      <Layout logoName="Jumia">
        <Routes>
          <Route path="/" element={<Home />}>
            <Route path="appliances" element={<Appliance />} />
            <Route path="phones_tablets" element={<Phones />} />
            <Route path="health_beauty" element={<Health />} />
            <Route path="home_office" element={<Office />} />
            <Route path="electronics" element={<Electronics />} />
            <Route path="fashion" element={<Fashion />} />
            <Route path="supermarket" element={<Super />} />
            <Route path="computing" element={<Computer />} />
            <Route path="baby_products" element={<BabyProduct />} />
            <Route path="gaming" element={<Gaming />} />
            <Route path="musical_instruments" element={<Musical />} />
            <Route path="other_categories" element={<Other />} />
          </Route>
          <Route path="/about" element={<About />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default Pages;
