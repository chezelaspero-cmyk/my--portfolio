import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useState } from 'react';

// ========== NAVBAR COMPONENT ==========
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="bg-blue-600 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="text-xl font-bold">MyPortfolio</Link>
          <div className="hidden md:flex space-x-6">
            <Link to="/" className="hover:text-blue-200 transition-colors">Home</Link>
            <Link to="/about" className="hover:text-blue-200 transition-colors">About Me</Link>
            <Link to="/projects" className="hover:text-blue-200 transition-colors">Projects</Link>
            <Link to="/resume" className="hover:text-blue-200 transition-colors">Resume</Link>
            <Link to="/contact" className="hover:text-blue-200 transition-colors">Contact</Link>
          </div>
          <button className="md:hidden text-2xl" onClick={() => setIsOpen(!isOpen)}>☰</button>
        </div>
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2">
            <Link to="/" className="block py-2" onClick={() => setIsOpen(false)}>Home</Link>
            <Link to="/about" className="block py-2" onClick={() => setIsOpen(false)}>About Me</Link>
            <Link to="/projects" className="block py-2" onClick={() => setIsOpen(false)}>Projects</Link>
            <Link to="/resume" className="block py-2" onClick={() => setIsOpen(false)}>Resume</Link>
            <Link to="/contact" className="block py-2" onClick={() => setIsOpen(false)}>Contact</Link>
          </div>
        )}
      </div>
    </nav>
  );
};

// ========== HOME PAGE ==========
const Home = () => (
  <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center text-center px-4">
    <div className="max-w-2xl">
      <h1 className="text-5xl font-bold text-blue-700 mb-4">Welcome! 👋</h1>
      <p className="text-xl text-gray-700 mb-2">Hi, I'm <strong>Chezel Aspero</strong></p>
      <p className="text-lg text-gray-600 mb-8">BSIT 3-2 | Cavite State University — Tanza Campus</p>
      <p className="text-md text-gray-500">
        This is my e-portfolio website built with ReactJS & Tailwind CSS. Explore to know more about me and my studies !”
      </p>
    </div>
  </div>
);

// ========== ABOUT ME PAGE ==========
const About = () => {
  const [showMore, setShowMore] = useState(false);
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-blue-700 mb-8">About Me</h2>
      
      <section className="mb-8 bg-white p-6 rounded-lg shadow">
        <h3 className="text-xl font-semibold mb-3">Personal Background</h3>
        <p className="text-gray-600">
          I am Chezel Aspero, a third-year Bachelor of Science in Information Technology student at Cavite State University — Tanza Campus. I live in Tanza, Cavite. I am currently a student eager tolearn and improve to my skills”.
        </p>
      </section>
      
      <section className="mb-8 bg-white p-6 rounded-lg shadow">
        <h3 className="text-xl font-semibold mb-3">currently learning </h3>
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <h4 className="font-medium text-blue-600 mb-2">Technical Skills and currently learning</h4>
            <ul className="text-gray-600 list-disc list-inside space-y-1">
              <li>HTML & CSS</li>
              <li>JavaScript</li>
              <li>communication teamwork</li>
              <li>problem solving </li>
              <li>introduction to programming </li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium text-blue-600 mb-2">Interests</h4>
            <ul className="text-gray-600 list-disc list-inside space-y-1">
              <li>singing</li>
              <li>dancing </li>
              <li>mobile legent</li>
              <li>bible study </li>
            </ul>
          </div>
        </div>
        
        <button 
          onClick={() => setShowMore(!showMore)} 
          className="mt-6 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          {showMore ? 'Show Less ↑' : 'Show More ↓'}
        </button>
        
        {showMore && (
          <p className="mt-4 text-gray-500 italic border-t pt-4">
            I enjoy solving problems there is still so much I need to learn whetever it’s java,and html or other programming skills ,I admit that coding can be really challenging for me, but I wont let the stop me I will keep trying and keep learning because my dream are worth it   
          </p>
        )}
      </section>
    </div>
  );
};





