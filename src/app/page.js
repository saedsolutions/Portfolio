// src/app/page.js
import { Hero } from '@/components/sections/Hero';
import { Services } from '@/components/sections/Services';
import { Portfolio } from '@/components/sections/Portfolio';
import { Contact } from '@/components/sections/Contact';

export default function Home() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Hero />
      <Services />
      <Portfolio />
      <Contact />
    </div>
  );
}