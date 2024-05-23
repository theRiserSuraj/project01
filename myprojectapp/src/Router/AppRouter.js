import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CustomNavbar from '../components/CustomNavbar';
import Home from '../Pages/Home';
import Trending from '../Pages/Trending';
import Face from '../Pages/Face';
import Body from '../Pages/Body';
import Fragnance from '../Pages/Fragnance';
import Gifts from '../Pages/Gifts';
import MakeUp from '../Pages/MakeUp';
import Offers from '../Pages/Offers';
import Range from '../Pages/Range';
import Services from '../Pages/Services';
import Tips from '../Pages/Tips';
import AboutUs from '../Pages/AboutUs';
import Header from '../components/Header';
import Hair from '../Pages/Hair';
function AppRouter() {
  return (  
    <div> 
      <Header />     
      <CustomNavbar />    
      <Router>
      <Routes>
      <Route path="/" element={<Home />} />
          <Route path="/trending" element={<Trending />} /> 
          <Route path="/body" element={<Body />} />
          <Route path="/face" element={<Face />} />
          <Route path='/Hair' element={<Hair />} />
          <Route path="/Fragnance" element={<Fragnance />} />
          <Route path="/Gifts" element={<Gifts />} />
          <Route path="/MakeUp" element={<MakeUp />} />
          <Route path="/Offers" element={<Offers />} />
          <Route path="/Range" element={<Range />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/Tips" element={<Tips />} />
          <Route path="/AboutUs" element={<AboutUs />} />
      </Routes>
      </Router>      
    </div>
 );
}
export default AppRouter;
