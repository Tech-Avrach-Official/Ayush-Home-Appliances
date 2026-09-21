import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/home/Home';
import About from '../pages/about/About';
import Service from '../pages/service/Service';
import Contact from '../pages/contact/Contact';
import Blog from '../pages/blog/Blog';
import Blog1 from '../pages/blog/components/Blog1';
import Blog2 from '../pages/blog/components/Blog2';
import Blog3 from '../pages/blog/components/Blog3';
import Blog4 from '../pages/blog/components/Blog4';
import Blog5 from '../pages/blog/components/Blog5';
import Blog6 from '../pages/blog/components/Blog6';
import Blog7 from '../pages/blog/components/Blog7';
import NotFound from '../components/NotFound';


const AllRoutes = () => {
  return (
    <>
      {/* <ScrollToTop /> */}
      <Routes>
        {/* Main Pages */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Service />} />
        <Route path="/contact" element={<Contact />} />

        <Route path="/blog" element={<Blog />} />

          <Route
        path="/ro-service-in-indore"
        element={<Blog1/>}
      />

      <Route path="/water-purifier-service-in-indore" element={<Blog2 />} />

      <Route path="/water-purifier-repair-in-indore" element={<Blog3 />} />

      <Route path="/ro-installation-in-indore" element={<Blog4 />} />

      <Route path="/kitchen-chimney-service-in-indore" element={<Blog5 />} />

      <Route path="/kitchen-chimney-repair-in-indore" element={<Blog6 />} />

      <Route path="/kitchen-chimney-cleaning-in-indore" element={<Blog7 />} />

        <Route path="*" element={<NotFound />} />

      </Routes>
    </>
  );
};

export default AllRoutes;
