/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import LadiesSection from './components/LadiesSection';
import Facilities from './components/Facilities';
import Trainers from './components/Trainers';
import Pricing from './components/Pricing';
import SocialFeed from './components/SocialFeed';
import Chatbot from './components/Chatbot';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-brand-black">
      <Navbar />
      <main>
        <Hero />
        <LadiesSection />
        <Facilities />
        <Trainers />
        <Pricing />
        <SocialFeed />
      </main>
      <Footer />
      <Chatbot />
      
      {/* Texture Overlay */}
      <div className="fixed inset-0 pointer-events-none z-50 bg-noise opacity-[0.03]" />
    </div>
  );
}
