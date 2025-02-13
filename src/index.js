import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';
import Experience from './components/Experience';
import ProjectDetails from "./components/ProjectDetail";
import Team from './components/Team';
import Contact from './components/Contact';
import Projects from './components/Projects';
import SummerSchool from './components/Summer';
import Screen from './components/splashscreen';
import './styles.css';

// Layout component to handle conditional rendering of Navbar
function Layout() {
  const location = useLocation();
  const hideNavbarOnRoutes = ["/load"]; // Hide navbar on these routes

  return (
    <>
      {!hideNavbarOnRoutes.includes(location.pathname) && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/team" element={<Team />} />
        <Route path="/load" element={<Screen />} />
        <Route path="/summerschool" element={<SummerSchool />} />
        <Route path="/project/:id" element={<ProjectDetails />} />
      </Routes>
    
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Layout />
  </BrowserRouter>
);

reportWebVitals();
