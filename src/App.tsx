import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ProjectDetail from './pages/ProjectDetail';
import Services from './pages/Services';
import Architecture from './pages/Architecture';
import Interior from './pages/Interior';
import Furniture from './pages/Furniture';
import AboutPage from './pages/AboutPage';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white font-sans text-gray-900 flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/project" element={<ProjectDetail />} />
            <Route path="/services" element={<Services />} />
            <Route path="/architecture" element={<Architecture />} />
            <Route path="/interior" element={<Interior />} />
            <Route path="/furniture" element={<Furniture />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
