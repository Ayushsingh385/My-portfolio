'use client';

import { useEffect } from 'react';
import {
  Navbar,
  Hero,
  About,
  Skills,
  Projects,
  Experience,
  Contact,
  Footer,
} from '@/components/sections';

/**
 * Home Page Component
 * Main portfolio page with all sections
 */
export default function Home() {
  // Initialize theme from localStorage on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  return (
    <main className="min-h-screen">
      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
      <div id="main-content">
        {/* Hero Section */}
        <Hero />

        {/* About Section */}
        <About />

        {/* Skills Section */}
        <Skills />

        {/* Projects Section */}
        <Projects />

        {/* Experience & Education Section */}
        <Experience />

        {/* Contact Section */}
        <Contact />
      </div>

      {/* Footer */}
      <Footer />
    </main>
  );
}