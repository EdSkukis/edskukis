import React from 'react';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Contact from './components/Contact';

export default function App() {
  return (
    <div className="max-w-4xl mx-auto p-4 space-y-12">
      <About />
      <Skills />
      <Experience />
      <Contact />
    </div>
  );
}