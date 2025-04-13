'use client';

import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import LoadingAnimation from '@/components/LoadingAnimation';

// Dynamically import heavy components
const TechStackExplorer = dynamic(() => import('@/components/TechStackExplorer'), {
  loading: () => <div className="h-screen flex items-center justify-center">Loading Tech Stack Explorer...</div>,
  ssr: false
});

const AIChatbot = dynamic(() => import('@/components/AIChatbot'), {
  loading: () => null,
  ssr: false
});

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingAnimation />;
  }

  return (
    <main className="min-h-screen bg-black text-white">
      {/* Fixed background with gradient */}
      <div className="fixed inset-0 bg-gradient-to-b from-black via-gray-900 to-black opacity-80 z-0" />
      
      {/* Content */}
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-32">
          <About />
          <Experience />
          <TechStackExplorer />
          <Projects />
          <Contact />
        </div>
        <Footer />
        <AIChatbot />
      </div>

      {/* Decorative elements */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-3xl -top-48 -right-48" />
        <div className="absolute w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-3xl -bottom-48 -left-48" />
      </div>
    </main>
  );
}
